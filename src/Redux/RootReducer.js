import { combineReducers } from "redux";
import { filterReducer } from "./FillterReducer";
import { productReducer } from "./ProductReducer";

export const rootReducer = combineReducers({
    product: productReducer,
    filter: filterReducer
})