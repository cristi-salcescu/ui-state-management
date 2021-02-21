import React from 'react';
import { connect } from 'react-redux';

import selectors from './selectors';
import actions from './actions';
import Note from './Note';
import NoteEdit from './EditNote';

function Board({notes, openCreateNote}) {
    
  return (
    <div>
      <div className="row">
        <div className="col">
          <button 
            type="button"
            className="btn btn-primary"
            onClick={openCreateNote}>
              Add
          </button>
        </div>  
      </div>

      <div className="row">
        {notes.map(note => 
          <Note note={note} key={note.id} />)}
      </div>  

      <NoteEdit />
    </div>
  );
}

//Connect
export default connect(
  state => ({
      notes: selectors.getNotes(state)
  }), {
    ...actions
  }
)(Board);