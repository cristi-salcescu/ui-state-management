<template>
    <div class="container">
      <h1>Notes Application</h1>
      <div class="row">
        <div className="col-3">
          <CategoryList />
          <NewCategory />
        </div>
        <div className="col-9">
          <Board /> 
        </div>     
      </div>
    </div>
</template>

<script>
import CategoryList from './components/CategoryList';
import NewCategory from './components/NewCategory';
import Board from './components/Board';

export default {
  name: 'app',
  components: {
    CategoryList,
    NewCategory,
    Board
  }
}
</script>