<form>
    <div class="form-group">
    <input 
     type="text" 
     class="form-control"
     bind:value={title} 
    />
    </div>
    {#if title !== ''}
    <div>
        <button 
         type="button"
         class="btn btn-primary"
         on:click={addCategoryAndClear}>
            Add
        </button>
    </div>
    {/if}
</form>


<script>
import categories from './stores/categories';

let title= '';

function addCategoryAndClear(){
    categories.addCategory(title);
    title = '';
}

</script>