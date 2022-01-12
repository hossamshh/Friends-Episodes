import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#1D79D0",
		},
		error: {
			main: "#E01E26",
		},
		secondary: {
			main: "#8276B2",
		},
		success: {
			main: "#259D6D",
		},
		info: {
			main: "#585B60",
		},
		text: {
			primary: "#1D1F20",
			secondary: "#848A90",
			hint: "#585B60",
		},
		background: {
			default: "#F2F2F2",
		},
	},
	typography: {
		fontFamily: "'Montserrat', sans-serif",
		h6: {
			fontWeight: 600,
			fontSize: 20,
			lineHeight: "24px",
			letterSpacing: "0.15px",
		},
		h5: {
			fontWeight: 500,
			fontSize: 24,
			lineHeight: "28px",
		},
		subtitle1: {
			fontWeight: 500,
			fontSize: 16,
			lineHeight: "22px",
			letterSpacing: "0.15px",
		},
		subtitle2: {
			fontWeight: 600,
			fontSize: 14,
			lineHeight: "20px",
			letterSpacing: "0.1px",
		},
		body1: {
			fontWeight: 500,
			fontSize: 16,
			lineHeight: "24px",
			letterSpacing: "0.5px",
		},
		body2: {
			fontWeight: 500,
			fontSize: 14,
			lineHeight: "24px",
			letterSpacing: "0.25px",
		},
		caption: {
			fontWeight: 500,
			fontSize: 12,
			lineHeight: "18px",
			letterSpacing: "0.4px",
			color: "#8276B2",
		},
		button: {
			textTransform: "none",
			fontWeight: 600,
			fontSize: 16,
			lineHeight: "22px",
			letterSpacing: "0.5px",
		},
	},
});

export default theme;
