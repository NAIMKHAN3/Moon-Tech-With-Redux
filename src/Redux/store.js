import { createStore } from "redux";
import { productReducer } from "./ProductReducer";

const store = createStore(productReducer)

export default store