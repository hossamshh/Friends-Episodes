import React, {Fragment, useState} from "react";

import {
	AppBar,
	makeStyles,
	CssBaseline,
	Drawer,
	Box,
	IconButton,
	Avatar,
	Toolbar,
	Typography,
	Divider,
	ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NoAccountsIcon from "@material-ui/icons/Person";

import UserAvatar from "./UserAvatar";
import {ProfileLogoutIcon} from "../Config/icons";
import {clearAllWatched, deleteAccount, logout} from "../Repository/Firebase";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawerUser: {
		display: "flex",
		alignItems: "center",
		height: 64,
		padding: 10,
	},
	avatar: {
		width: 40,
		height: 40,
		objectFit: "cover",
		margin: 2,
	},
	avatarBox: {
		marginRight: 12,
		border: "2px solid",
		borderColor: theme.palette.secondary.main,
		borderRadius: "50%",
	},
	appBar: {
		backgroundColor: theme.palette.secondary.main,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	userAvatar: {
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	toolBar: {
		display: "flex",
		alignItems: "center",
		height: 64,
		[theme.breakpoints.up("sm")]: {
			justifyContent: "space-between",
		},
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		marginTop: 64,
		padding: theme.spacing(3),
	},
}));

export default function MyDrawer(props) {
	const {window, children, user} = props;
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Fragment>
			{user !== null ? (
				<Box className={classes.drawerUser}>
					<Box className={classes.avatarBox}>
						<Avatar
							alt={user.username}
							src={user.avatar}
							className={classes.avatar}
						/>
					</Box>
					<Typography variant="body2" noWrap color="secondary">
						{user.username}
					</Typography>
				</Box>
			) : (
				""
			)}
			<Divider />
			<ListItem
				button
				style={{height: 50}}
				onClick={() => {
					handleDrawerToggle();
					clearAllWatched();
				}}>
				<ProfileLogoutIcon style={{color: "#848A90"}} />
				<Typography color="secondary" style={{marginLeft: 12}}>
					Clear all watched
				</Typography>
			</ListItem>
			<ListItem
				button
				style={{height: 50}}
				onClick={() => {
					handleDrawerToggle();
					logout();
				}}>
				<NoAccountsIcon style={{color: "#848A90"}} />
				<Typography color="secondary" style={{marginLeft: 12}}>
					Delete account
				</Typography>
			</ListItem>
			<ListItem
				button
				style={{height: 50}}
				onClick={() => {
					handleDrawerToggle();
					deleteAccount();
				}}>
				<ProfileLogoutIcon />
				<Typography color="secondary" style={{marginLeft: 12}}>
					Logout
				</Typography>
			</ListItem>
		</Fragment>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar className={classes.toolBar}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Friends Episodes
					</Typography>
					<Box className={classes.userAvatar}>
						{user !== null ? <UserAvatar user={user} /> : ""}
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant="temporary"
					anchor={"left"}
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}>
					{drawer}
				</Drawer>
			</nav>
			<main className={classes.content}>{children}</main>
		</div>
	);
}
