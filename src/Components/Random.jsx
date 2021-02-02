import React, {Fragment, useState} from "react";
import {useSelector} from "react-redux";

import {
	Box,
	ListItemText,
	makeStyles,
	Switch,
	Typography,
} from "@material-ui/core";
import {epsNames} from "../Config/episodesList";
import {setEpispdes, showToaster} from "../Redux/Dispatch";
import {saveUserData} from "../Repository/Firebase";

export default function Random() {
	const episodes = useSelector((state) => state.eps.eps);

	const [any, setAny] = useState(false);
	const [genEp, setGenEp] = useState({state: false});

	const generateEpisode = () => {
		if (any) {
			const season = Math.floor(Math.random() * 10);
			const episode = Math.floor(
				(Math.random() * 100) % episodes[season].episodes.length
			);
			setGenEp({
				state: true,
				season: season,
				episode: episode,
			});
		} else {
			const wall = episodes.map((w) =>
				w.episodes.indexOf(false) !== -1 ? false : true
			);
			if (wall.indexOf(false) === -1) {
				showToaster("error", "You have watched all episodes", 3000);
				return;
			}

			var season = -1;
			var episode = -1;
			while (season === -1 || episode === -1) {
				const trySeason = Math.floor(Math.random() * 10);
				const tryEpisode = Math.floor(
					(Math.random() * 100) % episodes[trySeason].episodes.length
				);
				if (!episodes[trySeason].episodes[tryEpisode]) {
					season = trySeason;
					episode = tryEpisode;
				}
			}

			setGenEp({
				state: true,
				season: season,
				episode: episode,
			});
		}
	};

	const saveAsWatched = () => {
		if (genEp.state) {
			const newEps = [...episodes];
			newEps[genEp.season].episodes = episodes[
				genEp.season
			].episodes.map((w, i) => (i === genEp.episode ? true : w));
			setEpispdes(newEps);
			saveUserData(newEps);
		}
	};

	return (
		<Box>
			<Typography variant="h6" style={{paddingBottom: 4}}>
				Generate random episode
			</Typography>
			<Box style={{display: "flex", alignItems: "center"}}>
				<Switch color="secondary" checked={any} onChange={() => setAny(!any)} />
				<Typography variant="subtitle2" color="textSecondary">
					{any ? "Any episode" : "Only unwatched"}
				</Typography>
			</Box>
			<Box style={{textAlign: "center", padding: "4px 0 16px"}}>
				<Typography
					variant="h6"
					style={{cursor: "pointer"}}
					color="secondary"
					onClick={generateEpisode}>
					Generate
				</Typography>
				{genEp.state ? (
					<Fragment>
						<ListItemText
							primary={"S" + (genEp.season + 1) + "E" + (genEp.episode + 1)}
							secondary={epsNames[genEp.season][genEp.episode]}
						/>
						<Typography
							variant="body2"
							color="secondary"
							style={{cursor: "pointer"}}
							onClick={saveAsWatched}>
							Save as watched?
						</Typography>
					</Fragment>
				) : (
					""
				)}
			</Box>
		</Box>
	);
}
