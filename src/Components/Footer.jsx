import React from "react";

import {Box, Link, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	footer: {
		marginTop: 20,
		textAlign: "center",
	},
	link: {
		"&:hover": {
			cursor: "pointer",
		},
	},
}));

export function Footer() {
	const classes = useStyles();
	return (
		<Box className={classes.footer}>
			<Typography style={{fontSize: 12}} variant="body2" color="textSecondary">
				Developed by Hossam ElShaer
			</Typography>
			<Typography
				style={{fontSize: 12}}
				variant="body2"
				color="textSecondary"
				component="span">
				{"For Contact & Suggestions: "}
			</Typography>
			<Link
				style={{fontSize: 12}}
				variant="body2"
				color="textSecondary"
				href="mailto:hossampen97@gmail.com"
				className={classes.link}>
				hossampen97@gmail.com
			</Link>
		</Box>
	);
}
