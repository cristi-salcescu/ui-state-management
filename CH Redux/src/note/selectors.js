function getNotes({notes, selectedCategory}){
    return notes
        .filter(isInCategory(selectedCategory));
}

function isInCategory(category){
    return function(note){
        return note.categoryID === category.id;
    }
}

export default { getNotes };