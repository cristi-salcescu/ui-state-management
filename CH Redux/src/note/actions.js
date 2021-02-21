import { createAction } from '@reduxjs/toolkit';

const setNotes = createAction('setNotes');

const selectNote = createAction('selectNote');
const openCreateNote = createAction('openCreateNote');
const closeCreateNote = createAction('closeCreateNote');

const addNote = createAction('addNote');
const editNote = createAction('editNote');
const deleteNote = createAction('deleteNote');

export default { 
    setNotes, 
    addNote,
    editNote,
    deleteNote, 
    selectNote, 
    openCreateNote, 
    closeCreateNote 
};