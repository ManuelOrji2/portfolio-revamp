import resumeIcon from "../images/icons8-resume-50.png";
import worksIcon from "../images/icons8-document-30.png";
import aboutIcon from "../images/icons8-contact-50.png";

export type navLinkDetails = {
	imgSrc: string;
	path: string;
	name: string;
	target: string;
	view: string;
};

export const navLinks: navLinkDetails[] = [
	{
		imgSrc: "",
		path: "/",
		name: "Home",
		target: "",
		view: "",
	},
	{
		imgSrc: worksIcon,
		path: "/works",
		name: "Works",
		target: "",
		view: "destopView",
	},
	{
		imgSrc: aboutIcon,
		path: "/about",
		name: "About",
		target: "",
		view: "destopView",
	},
	{
		imgSrc: resumeIcon,
		path: "https://drive.google.com/file/d/1exHf5HU78jSg9bDbnEMOuoMkKGNapTj4/view?usp=sharing",
		name: "Resume",
		target: "_blank",
		view: "destopView",
	},
];
