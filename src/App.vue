<template>
  <div id="app">
    <Products />
    <AddProduct />
  </div>
</template>

<script>
import Products from './components/Products.vue'
import  AddProduct from './components/AddProduct'
export default {
  name: 'App',
  components: {
    Products,
    AddProduct
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
