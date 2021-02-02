import {SHOW_TOASTER, HIDE_TOASTER} from "../../Config/actionTypes";

export default function toasterReducer(
	state = {open: false, severity: "", content: "", duration: 3000},
	action
) {
	switch (action.type) {
		case SHOW_TOASTER:
			return {
				...state,
				open: true,
				severity: action.severity,
				content: action.content,
				duration: action.duration,
			};
		case HIDE_TOASTER:
			return {...state, open: false};
		default:
			return state;
	}
}
