import api from './api';
import actions from './actions';

function loadCategories(){
    return function(dispatch){
        return api.fetchCategories()
            .then(actions.setCategories)
            .then(dispatch)
    }
}

function addCategory(name){
    return function(dispatch){
        const category = {name}
        return api.addCategory(category)
            .then(loadCategories)
            .then(dispatch)
    }
}

function deleteCategory(id){
    return function(dispatch){
        return api.deleteCategory(id)
            .then(loadCategories)
            .then(dispatch)
    }
}

export default { 
    loadCategories, 
    addCategory, 
    deleteCategory 
};