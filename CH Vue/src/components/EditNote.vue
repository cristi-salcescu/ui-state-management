<template>
<div 
 className="overlay" 
 v-show="show">
    <form className="dialog">
        <div className="modal-body">
        <div className="form-group">
        <input 
            type="text" 
            v-model="title"
            className="form-control"
        /> 
        </div>
        <div className="form-group">
        <textarea
            rows="4" 
            v-model="content" 
            className="form-control">
        </textarea>
        </div>
        </div>
        <div className="modal-footer">             
        <button 
            type="button"
            className="btn btn-secondary"
            @click="closeCreateNote">
            Close
        </button>         
        <button 
            type="button" 
            className="btn btn-danger"
            @click="deleteNote(note.id)">
            Delete
        </button>              
        <button 
            type="button" 
            className="btn btn-primary"
            @click="saveNote(createNote())" >
            Save
        </button>
        </div>
    </form>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
data(){
    return {
        title: '',
        content: ''
    }
},
computed: {
    ...mapGetters({
        note: 'selectedNote',
        show: 'isNoteEditDialogVisible',
        category: 'selectedCategory'
    })
},
methods: {
    ...mapActions([
        'saveNote',
        'deleteNote'
    ]),
    ...mapMutations([
        'closeCreateNote'
    ]),
    createNote(){
        return { 
            ...this.note,
            title: this.title,
            content: this.content,
            categoryID : this.category.id
        };
    }    
},
watch: {
    note(){
        this.title = this.note.title;
        this.content = this.note.content;  
    }
  }
}
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