import React from "react";
import {useSelector} from "react-redux";

import {makeStyles, Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

import {hideToaster} from "../Redux/Dispatch";

const useStyles = makeStyles((theme) => ({
	toaster: {
		position: "fixed",
		zIndex: theme.zIndex.modal + 9999,
		top: 80,
		borderRadius: 4,
	},
	alert: {
		padding: 6,
	},
}));

export default function Toaster() {
	const classes = useStyles();
	const {open, severity, content, duration} = useSelector(
		(state) => state.toaster
	);
	return (
		<Snackbar
			open={open}
			anchorOrigin={{vertical: "top", horizontal: "center"}}
			classes={{anchorOriginTopCenter: classes.toaster}}
			autoHideDuration={duration}
			onClose={() => hideToaster()}>
			<Alert
				severity={severity}
				variant="filled"
				icon={false}
				style={{
					padding: 0,
					boxShadow:
						"0px 5px 6px 0px rgba(0, 0, 0, 0.2), 0px 3px 16px 0px rgba(0, 0, 0, 0.12), 0px 9px 12px 0px rgba(0, 0, 0, 0.14)",
				}}
				classes={{message: classes.alert}}>
				{content}
			</Alert>
		</Snackbar>
	);
}
