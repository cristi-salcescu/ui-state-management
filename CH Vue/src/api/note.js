import axios from 'axios';
const baseUrl = 'http://localhost:3001';

function fetchNotes(){
    return axios.get(`${baseUrl}/notes`)
        .then(getData);
}

function addNote(data){
    return axios.post(`${baseUrl}/notes`, data)
        .then(getData);
}

function editNote(data){
    return axios.put(`${baseUrl}/notes/${data.id}`, data)
        .then(getData)
}

function deleteNote(id){
    return axios.delete(`${baseUrl}/notes/${id}`)
        .then(getData)
}

function getData(response){
    return response.data;
}
 
export default { 
    fetchNotes, 
    addNote, 
    editNote, 
    deleteNote 
};