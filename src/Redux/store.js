import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import { rootReducer } from "./RootReducer";

const store = createStore(rootReducer, composeWithDevTools())

export default store