import React from "react";

import {
	Box,
	Button,
	Container,
	Dialog,
	makeStyles,
	Typography,
} from "@material-ui/core";
import {signInFacebook, signInGoogle} from "../Repository/Firebase";
import {FacebookLogo, GoogleLogo} from "../Config/icons";
import {showPrivacy} from "../Redux/Dispatch";

const useStyles = makeStyles((theme) => ({
	dialog: {
		padding: 0,
		borderRadius: 8,
	},
	heading: {
		backgroundColor: theme.palette.secondary.main,
		height: 50,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	buttons: {
		padding: 40,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	customButton: {
		backgroundColor: "white",
		boxShadow: "none",
		border: "solid 1px",
		borderColor: theme.palette.text.hint,
		color: theme.palette.text.hint,
	},
	buttonContent: {
		display: "flex",
		alignItems: "center",
		width: 230,
		padding: "5px 0",
	},
}));

export default function Login({open}) {
	const classes = useStyles();

	return (
		<Dialog open={open}>
			<Container className={classes.dialog}>
				<Box className={classes.heading}>
					<Typography variant="h6" style={{color: "white"}}>
						Login to friends episodes
					</Typography>
				</Box>
				<Box className={classes.buttons}>
					<Button
						variant="contained"
						onClick={signInGoogle}
						className={classes.customButton}>
						<Box className={classes.buttonContent}>
							<GoogleLogo />
							<Typography variant="button" style={{marginLeft: 16}}>
								Login with Google
							</Typography>
						</Box>
					</Button>
					<Button
						variant="contained"
						onClick={signInFacebook}
						className={classes.customButton}
						style={{margin: "20px 0 0"}}>
						<Box className={classes.buttonContent}>
							<FacebookLogo />
							<Typography variant="button" style={{marginLeft: 16}}>
								Login with Facebook
							</Typography>
						</Box>
					</Button>
					<Typography
						variant="caption"
						style={{cursor: "pointer", margin: "20px 0 0"}}
						onClick={showPrivacy}>
						Privacy Policy
					</Typography>
				</Box>
			</Container>
		</Dialog>
	);
}
