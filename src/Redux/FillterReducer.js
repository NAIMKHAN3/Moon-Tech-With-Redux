import { TOOGLE_BRAND, TOOGLE_STOCK } from "./ActionTypes";

const initialState = {
    filters: {
        brands: [],
        stock: false,
    },
    keyword: ""
};
export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_BRAND:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brands: [...state.filters.brands, action.payload]
                }
            }
        case TOOGLE_STOCK:
            return {

            }
        default: {
            return state;
        }
    }
}