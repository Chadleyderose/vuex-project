import axios from "axios";

export const getProducts = ({ commit }) => {
    axios.get('http://localhost:3000/Products')
    .then(response => {
        commit('SET_PRODUCT', response.data);
    })
}