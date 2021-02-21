<template>
    <ul className="list-group list-group-flush">
    <template 
     v-for="category in categories" 
     :key="category.id">
      <li
        v-if="isSelectedCategory(category)"
        @click="selectCategory(category)" 
        className="list-group-item list-group-item-primary" >
          <span>{{category.name}}</span>
          <button 
            type="button" 
            className="close"
            @click="deleteCategory(category.id)">
              <span aria-hidden="true">&times;</span>
          </button>
      </li>
      <li 
       v-else
       @click="selectCategory(category)" 
       className="list-group-item">
         <span>{{category.name}}</span>
      </li>
    </template>
    </ul>    
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'categories',
      'selectedCategory'
    ])
  },
  methods: {
    isSelectedCategory(category){
      return (category.id === this.selectedCategory.id)
    },
    ...mapMutations([
      'selectCategory'
    ]), 
    ...mapActions([
        'deleteCategory'
    ])
  }
}
</script>