import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
