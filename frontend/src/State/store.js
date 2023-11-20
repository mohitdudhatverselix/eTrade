import { createStore } from "redux";
import { cartReducer } from "./Reducers/dataReducers";

const store = createStore(cartReducer);

export default store;