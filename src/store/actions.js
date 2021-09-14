import axios from "axios";

export const getProducts = ({ commit }) => {
    axios.get('http://localhost:3000/products')
    .then(response => {
        commit('SET_PRODUCTS', response.data);
    })
}

export const getProduct = ({ commit }, productId) =>{
    axios.get(`http://localhost:3000/products/${productId}`)
    .then(response => {
        commit('SET_PRODUCT', response.data)
        console.log(response.data)
    })
}