import DataObjectIcon from "@mui/icons-material/DataObject";
import GitHubIcon from "@mui/icons-material/GitHub";

export const SITE = {
	title: "Site Scrapping",
	logoWidth: 150
};

export const STATUSES = {
	idle: "idle",
	loading: "loading",
	failed: "failed"
};

export const DEFAULT_SITE_DATA = {
	site: "https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression",
	selector: "table.wikitable"
};

export const MAIN_MENU = [
	{
		id: "1",
		title: "About me",
		link: "https://simflexcode.com/about",
		icon: DataObjectIcon
	},
	{
		id: "2",
		title: "GitHub for API",
		link: "https://github.com/blakenguyenvn/site-scrapping-services",
		icon: GitHubIcon
	},
	{
		id: "4",
		title: "GitHub for UI",
		link: "https://github.com/blakenguyenvn/site-scrapping-app",
		icon: GitHubIcon
	}
];

export const FOOTER_MENU = [];
