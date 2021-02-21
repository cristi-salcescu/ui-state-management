import api from '../../api/note';

const emptyNote = {
    title : '',
    content : ''
};

const state = {
    notes: [],
    selectedNote: emptyNote,
    isNoteEditDialogVisible: false
};

const getters = {
    notes(state, getters, rootState) {
        return filterByCategory(
                state.notes, 
                rootState.category.selectedCategory);
    },
    selectedNote(state){
        return state.selectedNote;
    },
    isNoteEditDialogVisible(state){
        return state.isNoteEditDialogVisible;
    }
};

const mutations = {
    setNotes(state, notes){
        state.notes = notes;
    },
    selectNote(state, note){
        state.selectedNote = note;
        state.isNoteEditDialogVisible = true;
    },
    openCreateNote(state){
        state.selectedNote = emptyNote;
        state.isNoteEditDialogVisible = true;
    },
    closeCreateNote(state){
        state.isNoteEditDialogVisible = false; 
    },
    addNote(state, note){
        state.notes = [ ...state.notes, note];
        state.selectedNote = note;
        state.isNoteEditDialogVisible = false;
    },
    editNote(state, note){
        state.notes = editItemInArray(state.notes, note);
        state.selectedNote = note;
        state.isNoteEditDialogVisible = false;
    },
    deleteNote(state, id){
        state.notes = deleteFromArray(state.notes, id);
        state.isNoteEditDialogVisible = false;
    }
};

const actions = {
    loadNotes({ commit }){
        return api.fetchNotes()
            .then(notes => commit('setNotes', notes))
    },
    saveNote({dispatch}, note){
        return note.id
            ? dispatch('editNote', note)
            : dispatch('addNote', note);
    },  
    addNote({ commit }, note){
        return api.addNote(note)
            .then(newNote => commit('addNote', newNote))
    },
    editNote({ commit }, note){
        return api.editNote(note)
            .then(newNote => commit('editNote', newNote))
    },
    deleteNote({ commit }, id){
        return api.deleteNote(id)
            .then(() => commit('deleteNote', id))
    }    
};

//Pure functions
function editItemInArray(arr, newItem){
    return arr.map(function(item){
        return item.id === newItem.id
            ? newItem
            : item;
    });
}

function deleteFromArray(arr, id){
    return arr.filter(note => note.id !== id);
}
  
function filterByCategory(notes, category){
    return notes.filter(isInCategory(category));
}
  
function isInCategory(category){
    return function(note){
        return note.categoryID === category.id;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}