import api from '../../api/category';

const state = {
    categories: [],
    selectedCategory: {},
};

const getters = {
    categories(state){
        return state.categories;
    },
    selectedCategory(state){
        return state.selectedCategory;
    }
};

const mutations = {
    setCategories(state, categories) {
        state.categories = categories;
        state.selectedCategory = categories[0];
    },
    selectCategory(state, category) {
        state.selectedCategory  = category;
    }
};

const actions = {
    loadCategories({ commit }){
        return api
            .fetchCategories()
            .then(categories => commit('setCategories', categories));
    }, 
    addCategory({ dispatch }, name){
        const category = {name}
        return api
            .addCategory(category)
            .then(() => dispatch('loadCategories'))
    },
    deleteCategory({ dispatch }, id){
        return api
            .deleteCategory(id)
            .then(() => dispatch('loadCategories'))
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}