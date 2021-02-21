import { writable } from 'svelte/store';
import api from '../api/category';

function CategoryStore() {
    const { subscribe, set, update } = writable([]);
    
    function loadCategories(){
        return api
            .fetchCategories()
            .then(set);
    }

    function addCategory(name){
        const category = {name}
        return api
            .addCategory(category)
            .then(loadCategories)
    }

    function deleteCategory(id){
        return api
            .deleteCategory(id)
            .then(loadCategories)
    }

	return {
		subscribe,
        loadCategories,
        addCategory,
        deleteCategory
	};
}

const store = CategoryStore();

export default store;