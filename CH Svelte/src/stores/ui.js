import { writable } from 'svelte/store';

const emptyNote = {
    title : '',
    content : ''
};

function UIStore() {
    const { subscribe, set, update } = writable({
        selectedCategory: {},
        selectedNote: emptyNote,
        isNoteEditDialogVisible: false
    });

    function selectCategory(selectedCategory){
        update(state => ({
            ...state,
                selectedCategory
        }));
    }

    function selectNote(note){
        update(state => ({
            ...state,
            selectedNote : note,
            isNoteEditDialogVisible : true
        }));
    }

    function openCreateNote(){
        update(state => ({
            ...state,
            selectedNote : emptyNote,
            isNoteEditDialogVisible : true
        }));
    }

    function closeCreateNote(){
        update(state => ({
            ...state,
            isNoteEditDialogVisible : false
        }));
    }

	return {
		subscribe,
        selectCategory,
        selectNote,
        openCreateNote,
        closeCreateNote
	};
}

const store = UIStore();

export default store;