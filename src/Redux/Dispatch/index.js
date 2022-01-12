import {
	SHOW_TOASTER,
	HIDE_TOASTER,
	SET_EPISODES,
	CLEAR_EPISODES,
	SHOW_PRIVACY,
	HIDE_PRIVACY,
} from "../../Config/actionTypes";

import store from "../index";

// toaster
export const showToaster = (severity, content, duration) => {
	store.dispatch({type: SHOW_TOASTER, severity, content, duration});
};
export const hideToaster = () => {
	store.dispatch({type: HIDE_TOASTER});
};

// episodes
export const setEpispdes = (eps) => {
	store.dispatch({type: SET_EPISODES, eps});
};
export const clearEpisodes = () => {
	store.dispatch({type: CLEAR_EPISODES});
};

// privacy dialog
export const showPrivacy = () => {
	store.dispatch({type: SHOW_PRIVACY});
};
export const hidePrivacy = () => {
	store.dispatch({type: HIDE_PRIVACY});
};
