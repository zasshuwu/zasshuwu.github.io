import { React, useState } from "react";

// ui
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/core/styles";
import customTheme from "../styles/theme";

// icons
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import WorkIcon from "@material-ui/icons/Work";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import BeenhereIcon from "@material-ui/icons/Beenhere";

// modals
import Contact from "./contact";
import Experience from "./experience";
import Awards from "./awards";
import Projects from "./project";

const useStyles = makeStyles((theme) => ({
	navBarWrapper: {
		minHeight: "50px",
		width: "100%",
		position: "relative",
		display: "flex",
		borderTop: "solid 1px grey",
		flexGrow: "1",
		// [theme.breakpoints.up("md")]: {
		// 	position: "absolute",
		// 	bottom: "0",
		// 	borderTop: "solid 1px grey",
		// 	display: "flex",
		// 	"& ul": {
		// 		"& li": {
		// 			margin: "0.5rem",
		// 		},
		// 	},
		// 	height: "50px",
		// 	width: "100%",
		// },
	},
	navBar: {
		padding: "0",

		marginLeft: "auto",
		"& > *": {
			margin: "0.5rem",
		},
	},
	customButtonHome: {
		color: "#1691f0",
		borderColor: "#1691f0",
		"&:hover": {
			background: "#1691f0",
			color: customTheme.palette.background.main,
		},
	},
	customButtonContact: {
		color: customTheme.palette.primary.main,
		borderColor: customTheme.palette.primary.main,
		"&:hover": {
			background: customTheme.palette.primary.main,
			color: customTheme.palette.background.main,
		},
	},
	customButtonExperience: {
		color: "#facc00",
		borderColor: "#facc00",
		"&:hover": {
			background: "#facc00",
			color: customTheme.palette.background.main,
		},
	},
	customButtonProjects: {
		color: "#00ddff",
		borderColor: "#00ddff",
		"&:hover": {
			background: "#00ddff",
			color: customTheme.palette.background.main,
		},
	},
	customButtonAwards: {
		color: customTheme.palette.navButton,
		borderColor: customTheme.palette.navButton,
		"&:hover": {
			background: customTheme.palette.navButton,
			color: customTheme.palette.background.main,
		},
	},
	customButtonGitHub: {
		color: "#fff",
		borderColor: "#fff",
		"&:hover": {
			background: "#fff",
			color: customTheme.palette.background.main,
		},
	},
	BtnText: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
}));

export default function NavBar({ setCommand, setContent }) {
	const [values, setValues] = useState({
		showContact: false,
		showExperience: false,
		showAwards: false,
		showProjects: false,
		showMain: false,
	});

	// button handlers
	const toHome = () => {
		setCommand("cd ~/home/aaanh");
		setContent("main");
		setValues({ ...values, showMain: !values.showMain });
	};
	const handleContact = () => {
		setCommand("contact");
		setContent("contact");
		setValues({ ...values, showContact: !values.showContact });
	};
	const handleExperience = () => {
		setCommand("experience");
		setContent("experience");
		setValues({ ...values, showExperience: !values.showExperience });
	};
	const handleProjects = () => {
		setCommand("projects");
		setContent("projects");
		setValues({ ...values, showProjects: !values.showProjects });
	};
	const handleGitHub = (e) => {
		e.preventDefault();
		setCommand("github");
		window.open("https://github.com/aaanh");
	};
	const handleAwards = () => {
		setCommand("awards");
		setContent("awards");
		setValues({ ...values, showAwards: !values.showAwards });
	};

	const classes = useStyles();

	return (
		<div className={classes.navBarWrapper}>
			<Contact showContact={values.showContact} handleClose={handleContact}></Contact>
			<Awards showAwards={values.showAwards} handleClose={handleAwards}></Awards>
			<Projects showProjects={values.showProjects} handleClose={handleProjects}></Projects>
			<Experience
				showExperience={values.showExperience}
				handleClose={handleExperience}
			></Experience>

			<div className={classes.navBar}>
				<Button
					size="small"
					onClick={toHome}
					variant="outlined"
					className={classes.customButtonHome}
				>
					<span style={{ textTransform: "lowercase" }}>cd ~</span>
				</Button>

				<Button
					size="small"
					onClick={handleContact}
					variant="outlined"
					className={classes.customButtonContact}
				>
					<MailIcon fontSize="small"></MailIcon>
					<span className={classes.BtnText}>&nbsp; Contact</span>
				</Button>

				<Button
					size="small"
					onClick={handleExperience}
					variant="outlined"
					className={classes.customButtonExperience}
				>
					<WorkIcon fontSize="small"></WorkIcon>
					<span className={classes.BtnText}>&nbsp; Experience</span>
				</Button>

				<Button
					size="small"
					onClick={handleProjects}
					variant="outlined"
					className={classes.customButtonProjects}
				>
					<AccountTreeIcon fontSize="small"></AccountTreeIcon>
					<span className={classes.BtnText}>&nbsp; Projects</span>
				</Button>

				<Button
					size="small"
					onClick={handleAwards}
					variant="outlined"
					className={classes.customButtonAwards}
				>
					<BeenhereIcon fontSize="small"></BeenhereIcon>
					<span className={classes.BtnText}>&nbsp; Awards</span>
				</Button>

				<Button
					onClick={handleGitHub}
					variant="outlined"
					className={classes.customButtonGitHub}
				>
					<GitHubIcon fontSize="small"></GitHubIcon>
					<span className={classes.BtnText}>&nbsp; @aaanh</span>
				</Button>
			</div>
		</div>
	);
}