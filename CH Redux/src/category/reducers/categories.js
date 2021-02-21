import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions';

const initialState = [];

function setCategories(state, action){
    const categories = action.payload;
    return categories;
}

export default createReducer(initialState, {
    [actions.setCategories]: setCategories
  });