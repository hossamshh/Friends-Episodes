import React, {Fragment, useState} from "react";

import {
	Avatar,
	makeStyles,
	Box,
	Typography,
	ClickAwayListener,
	Popper,
	Grow,
	MenuList,
	MenuItem,
} from "@material-ui/core";
import ClearAllRoundedIcon from "@material-ui/icons/ClearAllRounded";
import Person from "@material-ui/icons/Person";

import {ArrowDown, UpArrowBlue, ProfileLogoutIcon} from "../Config/icons";

import {logout, clearAllWatched, deleteAccount} from "../Repository/Firebase";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: 0,
		marginLeft: 12,
		display: "flex",
		alignItems: "center",
		cursor: "pointer",
	},
	avatar: {
		width: 30,
		height: 30,
		objectFit: "cover",
		marginRight: 12,
	},
	popper: {
		marginTop: 17,
	},
	menuList: {
		backgroundColor: "white",
		boxShadow:
			"0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
		borderRadius: 4,
		minWidth: 220,
	},
	typo2: {
		marginLeft: 12,
	},
	menuItem: {padding: 0},
	link: {
		color: theme.palette.text.primary,
		display: "flex",
		alignItems: "center",
		padding: 10,
	},
}));

export default function UserAvatar(props) {
	const {user} = props;
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const closeMenu = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;

	return (
		<Fragment>
			<ClickAwayListener onClickAway={closeMenu}>
				<Box className={classes.container} onClick={handleClick}>
					<Avatar
						alt={user.username}
						src={user.avatar}
						className={classes.avatar}
					/>
					<Typography variant="body2">{user.username}</Typography>
					{open ? <UpArrowBlue /> : <ArrowDown />}
				</Box>
			</ClickAwayListener>
			<Popper
				id={id}
				open={open}
				anchorEl={anchorEl}
				transition
				disablePortal
				className={classes.popper}>
				{({TransitionProps}) => (
					<Grow {...TransitionProps} style={{transformOrigin: "center top"}}>
						<MenuList className={classes.menuList}>
							<MenuItem className={classes.menuItem} onClick={clearAllWatched}>
								<Box className={classes.link}>
									<ClearAllRoundedIcon style={{color: "#848A90"}} />
									<Typography
										variant="subtitle1"
										className={classes.typo2}
										color="secondary">
										Clear all watched
									</Typography>
								</Box>
							</MenuItem>
							<MenuItem className={classes.menuItem} onClick={deleteAccount}>
								<Box className={classes.link}>
									<Person style={{color: "#848A90"}} />
									<Typography
										variant="subtitle1"
										className={classes.typo2}
										color="secondary">
										Delete account
									</Typography>
								</Box>
							</MenuItem>
							<MenuItem className={classes.menuItem} onClick={logout}>
								<Box className={classes.link}>
									<ProfileLogoutIcon />
									<Typography
										variant="subtitle1"
										className={classes.typo2}
										color="secondary">
										Logout
									</Typography>
								</Box>
							</MenuItem>
						</MenuList>
					</Grow>
				)}
			</Popper>
		</Fragment>
	);
}
