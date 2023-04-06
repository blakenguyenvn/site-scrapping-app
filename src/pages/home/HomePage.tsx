import React from "react";
import Container from "@mui/material/Container";
import PageContent from "components/PageContent";
import ScrappingSite from "features/scrappingSite/ScrappingSite";
import "./HomePage.scss";

function HomePage() {
	return (
		<PageContent>
			<Container>
				<ScrappingSite />
			</Container>
		</PageContent>
	);
}

export default HomePage;
