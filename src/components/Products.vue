<template>
  <div>
    Products
    <ul class="products_listing">
      <li v-for="product in allProducts" :key="product.id">
        {{product.title}} | {{product.price | currency}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters ,mapActions} from "vuex";
export default {
  name: 'Products',
  filters:{
    currency:function(value){
      return "$ " +parseFloat(value).toFixed(2);
    }
  },
  methods:{
    ...mapActions(["getProducts"])
  },
  computed: mapGetters(["allProducts"]),
  created(){
    this.getProducts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
