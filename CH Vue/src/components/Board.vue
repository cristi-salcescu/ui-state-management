<template>
    <div>
      <div class="row">
        <button 
         type="button"
         class="btn btn-primary" 
         @click="openCreateNote">
          Add
        </button>
      </div>
      <EditNote />
      <div class="row">
        <Note 
         v-for="note in notes" 
         :note="note" 
         :key="note.id" />
      </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import EditNote from './EditNote';
import Note from './Note';

export default {
  computed: {
    ...mapGetters([
      'notes'
    ])
  },
  methods: {
    ...mapMutations([
        'openCreateNote'
    ])
  },
  components: {
    EditNote,
    Note
  } 
}
</script>