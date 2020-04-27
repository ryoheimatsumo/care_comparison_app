import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { facilitiesReducer } from "./reducer/Facilities";

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      facilities: facilitiesReducer,
    }),
    applyMiddleware(
      logger,
    )
  );

  return store;
}