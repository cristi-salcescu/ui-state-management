<div>
  <div class="row">
    <button 
     type="button"
     class="btn btn-primary"
     on:click={ui.openCreateNote}
    >
      Add
    </button>
  </div>
  <EditNote />
  <div class="row">
    {#each $filteredNotes as note}
      <Note note={note} />
    {/each}
  </div>
</div>

<script>
import EditNote from './EditNote.svelte';
import Note from './Note.svelte';

import notes from './stores/note.js';
import ui from './stores/ui.js';
import filteredNotes from './stores/filteredNotes';

notes.loadNotes();
</script>