import { createStore } from 'vuex';

import category from './modules/category';
import note from './modules/note';

const store = createStore({
  modules: {
    category,
    note
  }
})

export default store;