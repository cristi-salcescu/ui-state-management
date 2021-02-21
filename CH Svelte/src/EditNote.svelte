{#if $ui.isNoteEditDialogVisible}
<div 
 class="overlay" 
 v-show="show">
    <form class="dialog">
        <div class="modal-body">
        <div class="form-group">
        <input 
            type="text" 
            bind:value={title}
            class="form-control"
        /> 
        </div>
        <div class="form-group">
        <textarea
            rows="4"
            bind:value={content}
            class="form-control" />
        </div>
        </div>
        <div class="modal-footer">             
        <button 
            type="button"
            class="btn btn-secondary"
            on:click={ui.closeCreateNote}>
            Close
        </button>         
        <button 
            type="button" 
            class="btn btn-danger"
            on:click={deleteNote}>
            Delete
        </button>              
        <button 
            type="button" 
            class="btn btn-primary"
            on:click={saveNote} >
            Save
        </button>
        </div>
    </form>
</div>
{/if}
    
<script>
import ui from './stores/ui';
import notes from './stores/note';

let  title = '';
let  content = '';

function createNote(){
    return { 
        ...$ui.selectedNote,
        title: title,
        content: content,
        categoryID : $ui.selectedCategory.id
    };
}

function deleteNote(){
    notes.deleteNote($ui.selectedNote.id);
    ui.closeCreateNote();
}

function saveNote(){
    const note = createNote();
    notes.saveNote(note);
    ui.closeCreateNote();
}

ui.subscribe(state => {
    title = state.selectedNote.title;
    content = state.selectedNote.content;
});
</script>
    
<style>
.overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    background:rgba(238, 238, 238, 0.8);
}

.dialog {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 8px;
    width: 400px;
    height: 300px;
    z-index: 1;
    background-color: #FFF;
    padding: 8px;
}
</style>