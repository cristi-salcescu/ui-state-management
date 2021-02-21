import notes from './note.js';
import ui from './ui.js';
import { derived } from 'svelte/store';

function filterByCategory(notes, category){
    return notes.filter(isInCategory(category));
}
  
function isInCategory(category){
    return function(note){
        return note.categoryID === category.id;
    }
}

export default derived( 
        [notes, ui], 
        ([$notes, $ui]) => {
    return filterByCategory($notes, $ui.selectedCategory);
}, []);