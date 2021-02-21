import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';

function Note({note, selectNote}) {
  return (
    <div 
     className="card col-4 m-1" 
     onClick={() => selectNote(note)}>
       <div className="card-body">
        <h3 className="card-title">{note.title}</h3>
        <div className="card-text">{note.content}</div>
       </div>
    </div>
  );
}

export default connect(
  null, {
    ...actions
  }
)(Note);