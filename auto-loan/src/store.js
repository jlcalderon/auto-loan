import { createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { autoLoanApplication } from "./components/reducers/LoanApplication";

const reducers = { autoLoanApplication };

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducers = combineReducers(reducers);
const persistedReducers = persistReducer(persistConfig, rootReducers);

export const configureStore = () =>
  createStore(
    persistedReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
