import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions';

const initialState = [];

function setNotes(state, action){
    const notes = action.payload;
    return notes;
}

function addNote(notes, action){
    const note = action.payload;
    return notes.concat([note]);
}

function editNote(notes, action){
    const newItem = action.payload;
    return notes.map(item => {
        return item.id === newItem.id
            ? newItem
            : item;
    });
}

function deleteNote(notes, action){
    const id = action.payload;
    return notes
        .filter(note => note.id !== id);
}

export default createReducer(initialState, {
    [actions.setNotes]: setNotes,
    [actions.addNote]: addNote,
    [actions.editNote]: editNote,
    [actions.deleteNote]: deleteNote   
 });