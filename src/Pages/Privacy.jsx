import React from "react";
import {useSelector} from "react-redux";

import {
	Box,
	Container,
	Dialog,
	makeStyles,
	Typography,
	IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import {hidePrivacy} from "../Redux/Dispatch";

const useStyles = makeStyles((theme) => ({
	dialog: {
		padding: 0,
		borderRadius: 8,
	},
	heading: {
		backgroundColor: theme.palette.secondary.main,
		padding: " 0 40px",
		height: 50,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	privacy: {
		padding: 40,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

export default function Privacy() {
	const classes = useStyles();
	const open = useSelector((state) => state.privacy.open);
	const onClose = () => {
		hidePrivacy();
	};

	return (
		<Dialog open={open} onClose={onClose}>
			<Container className={classes.dialog}>
				<Box className={classes.heading}>
					<Typography variant="h6" style={{color: "white"}}>
						Privacy
					</Typography>
					<IconButton onClick={onClose} style={{color: "white"}}>
						<CloseIcon />
					</IconButton>
				</Box>
				<Box className={classes.privacy}>
					<Typography variant="body2">
						Friends Episodes Generator only stores your email address along with
						your watched episodes, your profile photo and name are not kept or
						stored, they are provided from your Facebook or Google account and
						only used for display.
					</Typography>
					<Typography variant="body2" style={{margin: "20px 0 0"}}>
						Whenever you want to completely delete your account, meaning that
						your records (email and watched episodes) will be deleted from our
						records, click on your profile name or open the drawer, then you
						will find delete my account option.
					</Typography>
				</Box>
			</Container>
		</Dialog>
	);
}
