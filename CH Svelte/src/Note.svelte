<div 
 class="note"
 on:click={ui.selectNote(note)} >
    <h3>{note.title}</h3>
    <div>{note.content}</div>
</div>

<script>
import ui from './stores/ui';

export let note;
</script>

<style>
.note {
  border: 1px solid #000;
  width: 200px;
  height: 200px;
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}
</style>