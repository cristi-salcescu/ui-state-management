import { combineReducers } from 'redux';
import categories from './category/reducers/categories';
import selectedCategory from './category/reducers/selectedCategory';
import notes from './note/reducers/notes';
import noteDialog from './note/reducers/noteDialog';

export default combineReducers({
    categories,
    selectedCategory,
    notes,
    noteDialog
});