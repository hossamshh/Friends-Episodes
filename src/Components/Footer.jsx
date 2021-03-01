import React from "react";

import {Box, Link, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	footer: {
		marginTop: 20,
		paddingBottom: 10,
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
			<Typography
				style={{fontSize: 12, lineHeight: "14px"}}
				variant="body2"
				color="textSecondary">
				Developed by Hossam ElShaer
			</Typography>
			<Typography
				style={{fontSize: 12, lineHeight: "14px"}}
				variant="body2"
				color="textSecondary">
				{"For Contact & Suggestions: "}
				<Link
					style={{fontSize: 12, lineHeight: "14px"}}
					variant="body2"
					color="textSecondary"
					href="mailto:hossampen97@gmail.com"
					className={classes.link}>
					hossampen97@gmail.com
				</Link>
			</Typography>
		</Box>
	);
}
