import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions';

const emptyNote = {
    title : '',
    content : ''
};

const initialState = {
    note : emptyNote,
    show : false
};

function selectNote(state, action){
    const note = action.payload;
    return { 
        ...state, 
        note,
        show: true
    };
}

function openCreateNote(state, action){
    return { 
        ...state,
        note: emptyNote,
        show: true
    };
}

function closeCreateNote(state, action){
    return { 
        ...state,
        show: false
    }
}

export default createReducer(initialState, {
   [actions.selectNote]: selectNote,
   [actions.openCreateNote]: openCreateNote,
   [actions.closeCreateNote]: closeCreateNote    
});