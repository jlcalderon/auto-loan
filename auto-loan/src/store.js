import { createStore, combineReducers } from "redux";
import { autoLoanApplication } from "./components/reducers";
const reducers = { autoLoanApplication };

const rootReducers = combineReducers(reducers);

export const configureStore = () => createStore(rootReducers);
