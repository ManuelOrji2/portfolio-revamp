import htmlIcon from "../images/htmlIcon.svg";
import cssIcon from "../images/cssIcon.svg";
import scssIcon from "../images/scss.36794a5c6ae023d462dd42371652f3d9.svg";
import reactNativeIcon from "../images/react.4a6a8eddc67552babf7475946fbb1975.svg";
import reactJsIcon from "../images/react.4a6a8eddc67552babf7475946fbb1975.svg";
import javaScriptIcon from "../images/javascript.b4bd9f55e7a5e07fef75c3ec6c6113b7.svg";
import corelIcon from "../images/corel.dba8753774927cb5a6c20e71fbac319c.svg";
import tailwindCssIcon from "../images/tailwind-css.d84a6f369e7170891c4a19587ccf78e1.svg";
import mongoDbIcon from "../images/mongodb.ec5b2fbd7dbe9cce6b93be1b3ad2ea6c.svg";
import gitIcon from "../images/git.9e5efe4a58d251d445603088a1667119.svg";
import nextJsIcon from "../images/next-js.43e649734b4f278577629a3488272d9f.svg";
import nodeJsIcon from "../images/nodejs.dbfe5f95c0bc757a67be277698b93cce.svg";
import typeScriptIcon from "../images/icons8-typescript-24.png";
import photoshopIcon from "../images/icons8-photoshop-48.png";
import wordPressIcon from "../images/WordPress_blue_logo.svg.png";

type myTechDetail = {
	imgSrc: string;
	content: string;
};

export const myTechsDetails: myTechDetail[] = [
	{
		imgSrc: htmlIcon,
		content: "Html",
	},
	{
		imgSrc: cssIcon,
		content: "Css",
	},
	{
		imgSrc: scssIcon,
		content: "Scss",
	},
	{
		imgSrc: javaScriptIcon,
		content: "JavaScript",
	},
	{
		imgSrc: reactJsIcon,
		content: "React.js",
	},
	{
		imgSrc: wordPressIcon,
		content: "WordPress",
	},
	{
		imgSrc: corelIcon,
		content: "Corel",
	},
	{
		imgSrc: tailwindCssIcon,
		content: "TailwindCss",
	},
	{
		imgSrc: reactNativeIcon,
		content: "React Native",
	},
	{
		imgSrc: gitIcon,
		content: "Git",
	},
	{
		imgSrc: nextJsIcon,
		content: "Next.js",
	},
	{
		imgSrc: nodeJsIcon,
		content: "Node.js",
	},
	{
		imgSrc: typeScriptIcon,
		content: "TypeScript",
	},
	{
		imgSrc: photoshopIcon,
		content: "Photoshop CC",
	},
	{
		imgSrc: mongoDbIcon,
		content: "Mongo Db",
	},
];
