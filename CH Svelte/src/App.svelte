<div class="container">
  <h1>Notes Application</h1>
  <div class="row">
    <div class="col-3">
      <CategoryList />
      <NewCategory />
    </div>
    <div class="col-9">
      <Board /> 
    </div>     
  </div>
</div>

<script>
import CategoryList from './CategoryList.svelte';
import NewCategory from './NewCategory.svelte';
import Board from './Board.svelte';
</script>