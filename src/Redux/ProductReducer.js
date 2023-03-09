import { ADD_TO_CARD, ADD_TO_WISHLIST } from "./ActionTypes";

const initialState = {
    card: [],
    wishlist: [],
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CARD:
            return {
                ...state,
                card: [...state.card, action.payload]
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