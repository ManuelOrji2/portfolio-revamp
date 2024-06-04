import styles from "./About.module.scss";

import { contactDetails } from "../../utils/contactDetails";
import { myTechsDetails } from "../../utils/myTechsDetails";

const About = () => {
	return (
		<div className={styles.About}>
			<div>
				<span className="font-semibold">Tech Personality:</span> I'm passionate
				about Technology and I love creating amazing websites/web Apps with good
				and wonderful User Experience. I have a dynamic and progressive
				personality, I'm open to learning as much as practically possible to
				increase my skill level and I'm forever open to work with good Team of
				developers all over the world in order to make a positive impact on the
				world.
			</div>
			<div>
				<span className="font-semibold">Hobbies:</span> Aside from writing
				codes, I also enjoy graphic designing, I'm a football lover and I just
				don't watch it, I play it. Before I forget I love music and just like
				football I listen, I sing and I play Piano too.
			</div>
			<div>
				<span className="font-semibold">Interests:</span> I have interest in
				Technology, Music, Sports and a little in politics.
			</div>
			<div>
				<span className="font-semibold">Soft Skills:</span> I'm organized,
				creative, reliable, motivated, professional, a fast learner, a team
				player, a time manager, a problem solver and goal oriented.
			</div>
			<div>
				<span className="font-semibold">Technologies I use:</span>
				<div className={styles.myTech}>
					{myTechsDetails.map((myTech, i) => (
						<div
							className="flex gap-2 items-center shadow-md px-4 py-2 rounded-sm"
							key={i}
						>
							<img
								src={myTech.imgSrc}
								alt=""
								width={20}
							/>
							<span>{myTech.content}</span>
						</div>
					))}
				</div>
			</div>
			<div className={styles.contactDetails}>
				{contactDetails.map((detail, i) => (
					<a
						href={detail.contactLink}
						key={i}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={detail.imgSrc}
							alt=""
							width={25}
							className="cursor-pointer"
							title={detail.content}
						/>
					</a>
				))}
			</div>
		</div>
	);
};

export default About;
