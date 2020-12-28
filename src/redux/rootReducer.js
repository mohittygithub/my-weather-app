import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import inputReducer from "./inputReducer";

const rootReducer = combineReducers({
  weatherReducer,
  inputReducer,
});

export default rootReducer;
