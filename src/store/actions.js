import Product from "../apis/Products";
import Cart from "../apis/Cart";

export const getProducts = ({ commit }) => {
    Product.all().then(response => {
        commit('SET_PRODUCTS', response.data);
    })
}

export const getProduct = ({ commit }, productId) =>{
    Product.show(productId).then(response => {
        commit('SET_PRODUCT', response.data)
        console.log(response.data)
    })
}

export const addProductToCart = ({commit}, {product, quantity}) =>{
    commit('ADD_TO_CART', {product, quantity});

    Cart.store({product_id: product.id,
                quantity
    });
}

export const getCartItems = ({ commit }) => {
    Cart.all().then(response => {
        commit('SET_CART', response.data)
    })
}

export const removeProductFromCart = ({commit}, product) =>{
    commit('REMOVE_PRODUCT_FROM_CART', product);

    Cart.delete(product.id);
}

export const clearCartItems = ({ commit }) => {
    commit ('CLEAR_CART_ITEMS');

    Cart.deleteAll();
}