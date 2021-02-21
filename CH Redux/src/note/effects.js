import api from './api';
import actions from './actions';

function loadNotes(){
    return function(dispatch){
        return api.fetchNotes()
            .then(actions.setNotes)
            .then(dispatch);
    }
}

function saveNote(note){
    return note.id
        ? editNote(note)
        : addNote(note);
}

function addNote(note){
    return function(dispatch){
        return api.addNote(note)
            .then(actions.addNote)
            .then(dispatch)
            .then(actions.closeCreateNote)
            .then(dispatch);
    }
}

function editNote(note){
    return function(dispatch){
        return api.editNote(note)
            .then(actions.editNote)
            .then(dispatch)
            .then(actions.closeCreateNote)
            .then(dispatch);
    }
}

function deleteNote(id){
    return function(dispatch){
        return api.deleteNote(id)
            .then(() => id)
            .then(actions.deleteNote)
            .then(dispatch)
            .then(actions.closeCreateNote)
            .then(dispatch);
    }
}

export default { 
    loadNotes, 
    saveNote, 
    editNote, 
    deleteNote 
};