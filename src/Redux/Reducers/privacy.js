import {SHOW_PRIVACY, HIDE_PRIVACY} from "../../Config/actionTypes";

export default function toasterReducer(state = {open: false}, action) {
	switch (action.type) {
		case SHOW_PRIVACY:
			return {...state, open: true};
		case HIDE_PRIVACY:
			return {...state, open: false};
		default:
			return state;
	}
}
