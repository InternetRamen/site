import React from "react";
import { motion } from "framer-motion";

const team = [
	{
		name: "Linkai Wu",
		position: "Director",
		email: "linkai@blairhacks.com",
		website: "https://linkaiwu.com",
		image: "/assets/linkai.jpg",
	},
	{
		name: "Tinu Vanapamula",
		position: "Director",
		email: "tinu@blairhacks.com",
		website: "https://tinu.tech",
		image: "/assets/tinu.png",
	},
	{
		name: "Anika Rai",
		position: "Finance Lead",
		email: "anika@blairhacks.com",
		website: "https://www.linkedin.com/in/anika-rai-8a04b2201/",
		image: "/assets/anika.jpg",
	},
	{
		name: "Annie Gao",
		position: "Marketing Lead",
		email: "annie@blairhacks.com",
		website: "https://www.linkedin.com/in/anniegao24/",
		image: "/assets/annie.jpg",
	},
	{
		name: "Patrick Zhang",
		position: "Logistics Lead",
		email: "patrick@blairhacks.com",
		website: "https://pertark.com",
		image: "/assets/patrick.jpg",
	},
];

export default function Team() {
	return (
		<div className="text-center">
			<motion.h1
				initial={{ scale: 1.05, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.3, ease: "linear" }}
				className="font-bold text-4xl pb-10"
			>
				Our Team
			</motion.h1>
			<div className="flex justify-center">
				<div className="flex flex-wrap gap-10 justify-center">
					{team.map((member, i) => (
						<div key={i}>
							<a href={member.website} target="blank">
								<div className="hover:scale-105 transform transition duration-300 mb-5 mx-auto">
									<motion.img
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{
											duration: 0.3,
											delay: i * 0.1,
											ease: "linear",
										}}
										className="rounded-full h-48 w-48"
										src={member.image}
										alt={member.name}
									/>
								</div>
							</a>
							<motion.h2
								initial={{ scale: 1.05, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.3, delay: i * 0.1, ease: "linear" }}
								className="font-semibold"
							>
								{member.name}
							</motion.h2>
							<motion.h3
								initial={{ scale: 1.05, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{
									duration: 0.3,
									delay: i * 0.1 + 0.1,
									ease: "linear",
								}}
							>
								{member.position}
							</motion.h3>
							{/* <a href={`mailto:${member.email}`}>{member.email}</a> */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
