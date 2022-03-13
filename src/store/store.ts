// import rootReducer from "./index";
import hoverHandlerReducer from "./reducer";
import { createStore } from "redux";

const store = createStore(hoverHandlerReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
