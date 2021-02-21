import React from 'react';
import { connect } from 'react-redux';

import actions from './actions';
import effects from './effects';

function isSelected(category, selectedCategory){
  return (category.id === selectedCategory.id)
}

function CategoryList({ 
    categories, selectedCategory, 
    deleteCategory, selectCategory }) {
  return (
    <ul className="list-group list-group-flush">
      {categories.map(category => {
        return isSelected(category, selectedCategory)
        ? <li
            key={category.id} 
            onClick={() => selectCategory(category)} 
            className="list-group-item list-group-item-primary" >
              <span>{category.name}</span>
              <button 
               type="button" 
               className="close"
               onClick={() => deleteCategory(category.id)}>
                <span aria-hidden="true">&times;</span>
              </button>
          </li>
        : <li 
            key={category.id} 
            onClick={() => selectCategory(category)} 
            className="list-group-item">
              <span>{category.name}</span>
          </li>
      })}
    </ul>
  );
}

export default connect(
  ({categories, selectedCategory}) => ({
      categories,
      selectedCategory
  }), {
    ...actions,
    ...effects
  }
)(CategoryList);