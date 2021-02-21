import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './rootReducer';

import noteEffect from './note/effects';
import categoryEffects from './category/effects'; 

const store = configureStore({
    reducer: rootReducer
  });

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>, rootElement);

store.dispatch(categoryEffects.loadCategories());
store.dispatch(noteEffect.loadNotes());


