import axios from 'axios';
const state ={
    products:[]
};
const getters = {
    allProducts:state => state.products
};
const actions = {
    async getProducts({commit}){
        const response = await axios.get("http://localhost:3000/products");
        commit("setProducts",response.data);
    },
    async addProduct({commit},product){
        const response = await axios.post("http://localhost:3000/products",product);
        commit("newProduct",response.data);
    }
};
const mutations = {
    setProducts :(state, products)=>(state.products = products),
    newProduct :(state,product)=> (state.products.unshift(product))
};

export default {
    state,
    getters,
    actions,
    mutations
};