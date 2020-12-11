<template>
<div class="add-product">
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" placeholder="Add Products..." />
        <input type="text" v-model="price" placeholder="Add Price..." />
        <input type="submit" value="Submit" />
    </form>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddProduct',
  data(){
      return{
          title:"",
          price:""
      }
  },
  methods:{
      ...mapActions(["addProduct"]),
      onSubmit(){
          this.addProduct(
              {
                  title:this.title,
                  price:this.price
              }
          )
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
