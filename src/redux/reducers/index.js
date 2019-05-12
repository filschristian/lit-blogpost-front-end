import { combineReducers } from "redux";
import currentUser from "./userReducer";
import posts from "./postReducer";

const rootReducer = combineReducers({
  currentUser,
  posts
});

export default rootReducer;
