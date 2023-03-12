import { ADD_PRODUCT, ADD_TO_CARD, ADD_TO_WISHLIST, LOAD_PRODUCTS, REMOVE_FROM_CARD, REMOVE_PRODUCT } from "./ActionTypes"

export const addToCard = (product) => {
    return {
        type: ADD_TO_CARD,
        payload: product
    }
}
export const removeFromCard = (product) => {
    return {
        type: REMOVE_FROM_CARD,
        payload: product
    }
}
export const addToWishlist = (product) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: product
    }
}

export const loadProducts = (data) => {
    return {
        type: LOAD_PRODUCTS,
        payload: data
    }
}

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        payload: id
    }
}