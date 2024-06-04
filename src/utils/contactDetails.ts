import gitHubIcon from "../images/icons8-github-32.png";
import linkedInIcon from "../images/icons8-linkedin-30.png";
import xIcon from "../images/icons8-twitterx-50.png";

type contactDetail = {
	imgSrc: string;
	content: string;
	contactLink: string;
};

export const contactDetails: contactDetail[] = [
	{
		imgSrc: gitHubIcon,
		content: "Github",
		contactLink: "https://www.github.com/ManuelOrji2",
	},
	{
		imgSrc: linkedInIcon,
		content: "LinkedIn",
		contactLink: "https://www.linkedin.com/in/emmanuel-orji-497365212/",
	},
	{
		imgSrc: xIcon,
		content: "X",
		contactLink: "https:www.twitter.com/_Manuel_Orji",
	},
];
