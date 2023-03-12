import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import cartCounter from "./Middleware/cartCounter";
import { rootReducer } from "./RootReducer";
import thunk from "redux-thunk"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter, thunk)))

export default store