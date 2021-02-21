<ul class="list-group list-group-flush">
    {#each $categories as { id, name }}
    {#if $ui.selectedCategory.id === id}
    <li
        on:click={ui.selectCategory({ id })} 
        class="list-group-item list-group-item-primary" >
        <span>{name}</span>
        <button 
            type="button" 
            class="close"
            on:click={categories.deleteCategory(id)}>
            <span aria-hidden="true">&times;</span>
        </button>
    </li>
    {:else}
    <li 
        on:click={ui.selectCategory({ id })} 
        class="list-group-item">
        <span>{name}</span>
    </li>
    {/if}
    {/each}
</ul>

<script>
import categories from './stores/categories.js';
import ui from './stores/ui.js';

categories.loadCategories();
</script>