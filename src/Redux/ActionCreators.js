import { ADD_TO_CARD, ADD_TO_WISHLIST } from "./ActionTypes"

export const addToCard = (product) => {
    return {
        type: ADD_TO_CARD,
        payload: product
    }
}
export const addToWishlist = (product) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: product
    }
}