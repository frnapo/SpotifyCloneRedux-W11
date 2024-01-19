import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import playerReducer from "./playerReducer";
import likesReducer from "./likesReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  player: playerReducer,
  likes: likesReducer,
});

export default rootReducer;
