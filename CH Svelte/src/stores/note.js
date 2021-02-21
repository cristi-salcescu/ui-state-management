import { writable } from 'svelte/store';
import api from '../api/note';

function NoteStore() {
	const { subscribe, set, update } = writable([]);

    function loadNotes(){
        return api.fetchNotes()
            .then(notes => set(notes))
    }
	
	function saveNote(note){
        return note.id
            ? editNote(note)
            : addNote(note);
	}
	
    function addNote(note){
        return api.addNote(note)
            .then(loadNotes)
	}
	
    function editNote(note){
        return api.editNote(note)
            .then(loadNotes)
	}
	
    function deleteNote(id){
        return api.deleteNote(id)
            .then(loadNotes)
    }    

	return {
		subscribe,
		loadNotes,
		saveNote,
		deleteNote
	};
}

const store = NoteStore();

export default store;