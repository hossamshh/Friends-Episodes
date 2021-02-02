import { combineReducers } from "redux";

// Import custom components
import toasterReducer from "./toaster";
import epsReducer from "./episodes";

const rootReducer = combineReducers({
  toaster: toasterReducer,
  eps: epsReducer,
});

export default rootReducer;
