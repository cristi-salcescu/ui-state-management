import { createReducer } from '@reduxjs/toolkit';
import actions from '../actions';

const initialState = {};

function selectCategory(state, action){
    const selectedCategory = action.payload;
    return selectedCategory;
}

export default createReducer(initialState, {
    [actions.selectCategory]: selectCategory
});