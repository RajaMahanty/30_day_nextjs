import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

interface LinkProps {
	link: {
		linkTitle: string;
		link: string;
	};
}

const CustomLink = ({ link }: LinkProps) => {
	return (
		<Link href={link.link} passHref legacyBehavior>
			<Box
				component="a"
				target="_blank"
				className="link linkBackground"
				sx={{
					padding: "0.75rem 5.625rem",
					width: "14rem",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "0.5rem 0",
					borderRadius: "0.75rem",
					cursor: "pointer",
				}}
			>
				{link.linkTitle}
			</Box>
		</Link>
	);
};

export default CustomLink;
