import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {ThemeProvider} from "@material-ui/core";
import theme from "./Config/theme";

import {Provider} from "react-redux";
import store from "./Redux";

import Home from "./Pages/Home";

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
