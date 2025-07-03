import Card from "@/components/Card";
import Box from "@mui/material/Box";
import React from "react";

const Home = () => {
	return (
		<Box
			className="container"
			sx={{
				backgroundColor: "#141414",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Card />
		</Box>
	);
};

export default Home;
