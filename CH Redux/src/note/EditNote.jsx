import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import effects from './effects';

function EditNote({ 
    note, show, category, 
    closeCreateNote, deleteNote, saveNote}) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() =>{
      setTitle(note.title);
      setContent(note.content);
  }, [note]);

  function createNote(){
    return { 
      ...note,
      title,
      content,
      categoryID : category.id
    };
  }

  if(show) {
    return (
      <div className="overlay" >
        <form className="dialog">
          <div className="modal-body">
          <div className="form-group">
            <input 
              type="text" 
              value={title}
              className="form-control"
              onChange={e=>setTitle(e.target.value)} /> 
          </div>
          <div className="form-group">
            <textarea
              rows="4" 
              value={content} 
              className="form-control"
              onChange={e=>setContent(e.target.value)}>
            </textarea>
          </div>
          </div>
          <div className="modal-footer">             
            <button 
             type="button"
             className="btn btn-secondary"
             onClick={closeCreateNote}>
               Close
            </button>         
            <button 
             type="button" 
             className="btn btn-danger"
             onClick={() => deleteNote(note.id)}>
               Delete
            </button>              
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => saveNote(createNote())}>
                Save
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (null);
  } 
}

//Connect
export default connect(
  ({noteDialog, selectedCategory}) => ({
      note: noteDialog.note,
      show: noteDialog.show,
      category: selectedCategory
  }), {
    ...actions,
    ...effects
  }
)(EditNote);