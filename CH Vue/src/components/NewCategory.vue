<template>
    <form>
        <div className="form-group">
        <input 
            type="text" 
            className="form-control"
            v-model="title" 
        />
        </div>
        <div v-if="title !== ''" >
            <button 
                type="button"
                className="btn btn-primary"
                @click="addCategoryAndClear">
                Add
            </button>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
data(){
    return {
        title: '',
    }
},
methods: {
    ...mapActions([
        'addCategory'
    ]),
    addCategoryAndClear(){
        this.addCategory(this.title);
        this.title = '';
    }
}
}
</script>