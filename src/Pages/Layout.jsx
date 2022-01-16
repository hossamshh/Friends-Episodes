import React, {Fragment, useEffect, useState} from "react";

import {Box} from "@material-ui/core";

import Login from "./Login";
import Privacy from "./Privacy";
import MyDrawer from "../Components/MyDrawer";
import {Footer} from "../Components/Footer";
import Home from "./Home";

import {getUserData, onUserChanged} from "../Repository/Firebase";
import {showPrivacy} from "../Redux/Dispatch";

export default function Layout() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		onUserChanged((user) => {
			if (user !== null) {
				setUser({
					username: user.displayName,
					avatar: user.photoURL,
					uid: user.uid,
				});
				getUserData(user.uid);
			} else setUser(null);
		});
		if (window.location.href.includes("privacy")) {
			showPrivacy();
		}
	}, []);

	return (
		<Fragment>
			<Login open={user === null || user.uid === undefined} />
			<Privacy />
			<MyDrawer user={user}>
				<Box
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						height: window.innerHeight - 112,
					}}>
					<Home />
					<Footer />
				</Box>
			</MyDrawer>
		</Fragment>
	);
}
