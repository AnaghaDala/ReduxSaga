import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

import { userReducer } from "./redux/reducers/userReducer";

const rootReducer = combineReducers({
  userList: userReducer,
});

const initialState = {}; 

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware) 
  // composeWithDevTools(applyMiddleware(...middleware)) // Uncomment if using Redux DevTools
);

export default store;
