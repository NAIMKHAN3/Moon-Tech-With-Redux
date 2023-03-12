import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import cartCounter from "./Middleware/cartCounter";
import { rootReducer } from "./RootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter)))

export default store