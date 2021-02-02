import React, {Fragment} from "react";
import "./Styles/App.css";

import Toaster from "./Components/Toaster";
import Home from "./Pages/Home";

export default function App({children}) {
	return (
		<Fragment>
			<Toaster />
			<Home />
		</Fragment>
	);
}
