import React, {Fragment} from "react";
import "./Styles/App.css";

import Toaster from "./Components/Toaster";
import Layout from "./Pages/Layout";

export default function App({children}) {
	return (
		<Fragment>
			<Toaster />
			<Layout />
		</Fragment>
	);
}
