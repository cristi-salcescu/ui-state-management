import { createAction } from '@reduxjs/toolkit';

const setCategories = createAction('setCategories');
const selectCategory = createAction('selectCategory');
const addCategory = createAction('addCategory');

export default { 
    setCategories, 
    selectCategory,
    addCategory
};