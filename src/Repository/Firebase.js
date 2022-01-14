import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {firebaseConfig} from "../Config/constants";

import {eps} from "../Config/episodesList";
import {setEpispdes, showToaster} from "../Redux/Dispatch";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export function signInGoogle() {
	auth
		.signInWithPopup(googleProvider)
		.then((res) => getUserData())
		.catch((err) => {
			const msg = err.message.match(/already exists/gi)
				? "Email already exists"
				: "Something went wrong";
			showToaster("error", msg, 3000);
		});
}

export function signInFacebook() {
	auth
		.signInWithPopup(facebookProvider)
		.then((res) => getUserData())
		.catch((err) => {
			const msg = err.message.match(/already exists/gi)
				? "Email already exists"
				: "Something went wrong";
			showToaster("error", msg, 3000);
		});
}

export function onUserChanged(func) {
	auth.onAuthStateChanged((user) => func(user));
}

export function logout() {
	auth.signOut();
}

export function getUserData() {
	const uid = auth.currentUser.uid;

	const firestore = firebase.firestore();
	const userRef = firestore.doc("episodes/" + uid);

	userRef
		.get()
		.then((res) => {
			if (!res.exists) {
				setEpispdes(eps);
				saveUserData(eps);
			} else setEpispdes(res.data().data);
		})
		.catch((err) => console.log(err));
}

export function saveUserData(data) {
	const uid = auth.currentUser.uid;

	const userRef = firestore.doc("episodes/" + uid);
	userRef
		.set({data: data})
		.catch((err) => showToaster("error", "Something went wrong", 3000));
}

export function clearAllWatched() {
	const un = eps.map((w) => ({episodes: w.episodes.map(() => false)}));
	setEpispdes(un);
	saveUserData(un);
}

export async function deleteAccount() {
	await clearAllWatched();

	const user = auth.currentUser;
	user
		.delete()
		.then(() => showToaster("success", "Account deleted", 3000))
		.catch((e) => console.log(e));
}
