import React, { useState } from 'react';
import { connect } from 'react-redux';
import effects from './effects';

function NewCategory({ addCategory }) {

    const [title, setTitle] = useState('');

    function addCategoryAndClear(){
        addCategory(title);
        setTitle('');
    }

    return (
        <form>
            <div className="form-group">
            <input 
                type="text" 
                className="form-control"
                value={title} 
                onChange={e=>setTitle(e.target.value)} />
            </div>
            { title !== '' &&
                <div>
                    <button 
                        type="button"
                        className="btn btn-primary"
                        onClick={addCategoryAndClear}>
                        Add
                    </button>
                </div>
            }
        </form>
    )
}

export default connect(
    null, {
    ...effects
  }
)(NewCategory);