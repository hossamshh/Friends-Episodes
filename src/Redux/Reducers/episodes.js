import {SET_EPISODES, CLEAR_EPISODES} from "../../Config/actionTypes";

export default function epsReducer(state = {eps: []}, action) {
	switch (action.type) {
		case SET_EPISODES:
			return {...state, eps: action.eps};
		case CLEAR_EPISODES:
			return {...state, eps: []};
		default:
			return state;
	}
}
