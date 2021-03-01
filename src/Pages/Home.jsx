import React, {Fragment, useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {
	Accordion,
	AccordionSummary,
	Box,
	Typography,
	AccordionDetails,
	CircularProgress,
	List,
	ListItem,
	ListItemText,
	Checkbox,
	Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Login from "./Login";
import MyDrawer from "../Components/MyDrawer";
import Random from "../Components/Random";

import {getUserData, onUserChanged, saveUserData} from "../Repository/Firebase";

import {epsNames} from "../Config/episodesList";
import {setEpispdes} from "../Redux/Dispatch";
import {Footer} from "../Components/Footer";

export default function Home() {
	const [user, setUser] = useState(null);

	const watchedeps = useSelector((state) => state.eps.eps);

	const [wall, setWall] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	useEffect(() => {
		onUserChanged((user) => {
			if (user !== null) {
				setUser({
					username: user.displayName,
					avatar: user.photoURL,
					uid: user.uid,
				});
				getUserData(user.uid);
			} else setUser(null);
		});
	}, []);
	useEffect(() => {
		if (watchedeps.length === 10) {
			const newwall = watchedeps.map((w) =>
				w.episodes.indexOf(false) !== -1 ? false : true
			);
			setWall(newwall);
		}
	}, [watchedeps]);

	const handleClick = (season, episode) => {
		const newEps = [...watchedeps];
		if (episode === -1)
			newEps[season].episodes = watchedeps[season].episodes.map(
				() => !wall[season]
			);
		else
			newEps[season].episodes = watchedeps[season].episodes.map((w, i) =>
				i === episode ? !w : w
			);
		setEpispdes(newEps);
		saveUserData(newEps);
	};

	const mapWatched = () => {
		if (watchedeps.length === 0) {
			const arr = [];
			for (var i = 0; i < 10; i++) {
				arr.push(
					<Grid item key={i} xs={12} md={6}>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography variant="subtitle2">
									{"Season " + (i + 1)}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Box
									style={{
										width: "100%",
										display: "flex",
										justifyContent: "center",
									}}>
									<CircularProgress color="secondary" />
								</Box>
							</AccordionDetails>
						</Accordion>
					</Grid>
				);
			}
			return arr;
		} else {
			return watchedeps.map((eps, i) => (
				<Grid item key={i} xs={12} md={6}>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography variant="body1">{"Season " + (i + 1)}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<List style={{padding: 0}}>
								<ListItem style={{padding: 0}} key={0}>
									<Checkbox
										checked={wall[i]}
										onChange={() => {
											setWall(wall.map((w, index) => (i === index ? !w : w)));
											handleClick(i, -1);
										}}
										color="secondary"
										style={{alignSelf: "flex-start"}}
									/>
									<ListItemText primary="Watch all" />
								</ListItem>
								{eps.episodes.map((we, index) => (
									<ListItem style={{padding: 0}} key={index + 1}>
										<Checkbox
											checked={we}
											color="secondary"
											onChange={() => handleClick(i, index)}
											style={{alignSelf: "flex-start"}}
										/>
										<ListItemText
											primary={"E" + (index + 1)}
											secondary={epsNames[i][index]}
										/>
									</ListItem>
								))}
							</List>
						</AccordionDetails>
					</Accordion>
				</Grid>
			));
		}
	};

	return (
		<Fragment>
			<Login open={user === null || user.uid === undefined} />
			<MyDrawer user={user}>
				<Box
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						height: window.innerHeight - 112,
					}}>
					<Box>
						<Random />
						<Typography variant="h6" style={{paddingBottom: 16}}>
							List of episodes
						</Typography>
						<Grid container spacing={2}>
							{mapWatched()}
						</Grid>
					</Box>
					<Footer />
				</Box>
			</MyDrawer>
		</Fragment>
	);
}
