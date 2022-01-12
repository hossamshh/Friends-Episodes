import {combineReducers} from "redux";

// Import custom components
import toasterReducer from "./toaster";
import epsReducer from "./episodes";
import prvReducer from "./privacy";

const rootReducer = combineReducers({
	toaster: toasterReducer,
	eps: epsReducer,
	privacy: prvReducer,
});

export default rootReducer;
