import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import playerReducer from "./playerReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  player: playerReducer,
});

export default rootReducer;
