import React from 'react';
import CategoryList from './category/CategoryList';
import NewCategory from './category/NewCategory';
import Board from './note/Board';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Notes Application</h1>
      <div className="row">
        <div className="col-3">
          <CategoryList />
          <NewCategory />
        </div>
        <div className="col-9">
          <Board  /> 
        </div>
      </div>
    </div>
  );
}

export default App;
