import { ADD_TO_CARD, ADD_TO_WISHLIST, REMOVE_FROM_CARD } from "./ActionTypes";

const initialState = {
    card: [],
    wishlist: [],
}
export const productReducer = (state = initialState, action) => {
    const selectedProduct = state.card.find(product => product._id === action.payload._id)
    switch (action.type) {
        case ADD_TO_CARD:
            if (selectedProduct) {
                selectedProduct.quantity = selectedProduct.quantity + 1
                const newCard = state.card.filter(product => product._id !== selectedProduct._id)
                return {
                    ...state,
                    card: [...newCard, selectedProduct]
                }
            }
            return {
                ...state,
                card: [...state.card, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_FROM_CARD:
            if (selectedProduct.quantity > 1) {
                selectedProduct.quantity = selectedProduct.quantity - 1
                const newCard = state.card.filter(product => product._id !== selectedProduct._id)
                return {
                    ...state,
                    card: [...newCard, selectedProduct]
                }
            }
            return {
                ...state,
                card: state.card.filter(product => product._id !== action.payload._id)
            }
        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            }
        default:
            return state;
    }
}