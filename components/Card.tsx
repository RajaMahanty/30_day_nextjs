import styles from "./Card.module.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import CustomLink from "./CustomLink";

const links = [
	{ linkTitle: "Github", link: "https://github.com/RajaMahanty" },
	{
		linkTitle: "LinkedIn",
		link: "https://www.linkedin.com/in/raja-mahanty-233338263/",
	},
	{
		linkTitle: "Frontend Mentor",
		link: "https://www.frontendmentor.io/profile/RajaMahanty",
	},
	{ linkTitle: "X", link: "https://x.com/RajaMahanty7252" },
];

const Card = () => {
	return (
		<Box
			className={`${styles.container} ${styles.card}`}
			sx={{
				backgroundColor: "#141414",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				className={styles.cardBackground}
				sx={{
					padding: "2rem",
					borderRadius: "0.75rem",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Image
					src="/assets/images/avatar-jessica.jpeg"
					alt="profile image"
					height={88}
					width={88}
					style={{ borderRadius: "50%", marginBottom: "1.5rem" }}
				/>
				<Typography
					variant="h1"
					sx={{ fontSize: "2.25rem", marginBottom: "0.625rem" }}
				>
					Jessica Randall
				</Typography>
				<Typography
					className={styles.neon}
					variant="h2"
					sx={{
						fontSize: "1.3125rem",
						fontWeight: "600",
						marginBottom: "1.5rem",
					}}
				>
					London, United Kingdom
				</Typography>
				<Typography sx={{ fontSize: "1.3125rem", marginBottom: "1.5rem" }}>
					{'"Front-end developer and avid reader."'}
				</Typography>
				{links.map((link) => {
					return <CustomLink link={link} key={link.linkTitle} />;
				})}
			</Box>
		</Box>
	);
};

export default Card;
