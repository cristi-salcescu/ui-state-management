import axios from 'axios';
const baseUrl = 'http://localhost:3001';

function fetchCategories(){
    return axios
        .get(`${baseUrl}/categories`)
        .then(getData);
}

function addCategory(data){
    return axios
        .post(`${baseUrl}/categories`, data)
        .then(getData);
}

function deleteCategory(id){
    return axios
        .delete(`${baseUrl}/categories/${id}`)
        .then(getData);
}

function getData(response){
    return response.data;
}
 
export default { 
    fetchCategories, 
    addCategory, 
    deleteCategory 
};