<template>
    <div 
     class="note" 
     @click="selectNote(note)" >
        <h3>{{note.title}}</h3>
        <div>{{note.content}}</div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props : ['note'],
  methods: {
    ...mapMutations([
      'selectNote'
    ])
  }  
}
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