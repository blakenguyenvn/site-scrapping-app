import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Loader from "components/Loader";
import { STATUSES, DEFAULT_SITE_DATA } from "utils/config";
import { useScrappingSiteHooks } from "./scrappingSiteHooks";

const CaptionTypography = styled(Typography)`
	color: #fff;
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 16px;
`;

const EmptyTypography = styled(Typography)`
	color: #f5f5f5;
	font-size: 14px;
	font-style: italic;
`;

const NoteTypography = styled(Typography)`
	color: #f5f5f5;
	font-size: 14px;
	font-style: italic;
	fort-weight: bold;
	margin-bottom: 8px;
`;

const BootstrapButton = styled(Button)`
	min-width: 300px;
`;

const Wrapper = styled(Container)`
	width: 100%;
	padding: 8px 16px;
`;

const ContentWrapper = styled(Container)`
	width: 100%;
	padding: 16px;
	margin: 16px 0;
`;

const BootstrapTextField = styled(TextField)`
	margin: 16px 8px 8px;
	width: 100%;
	.MuiInputBase-input {
		width: 100%;
		color: #fff;
	}
`;

export default function ScrappingSite() {
	const [site, setSite] = useState(DEFAULT_SITE_DATA.site);
	const [selector, setSelector] = useState(DEFAULT_SITE_DATA.selector);

	const { selectors, actions } = useScrappingSiteHooks();
	const pageImage = useAppSelector(selectors.pageImage);
	const selectorImage = useAppSelector(selectors.selectorImage);
	const status = useAppSelector(selectors.status);
	const dispatch = useAppDispatch();

	const scrapSiteData = () => {
		dispatch(actions.fetchScrapSiteDataAsync({ site, selector }));
	};

	const updateSite = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSite(event.target.value);
	};

	const updateSelector = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelector(event.target.value);
	};

	return (
		<>
			<Wrapper>
				<div>
					<BootstrapTextField
						id="site-input"
						label="Site URL"
						variant="outlined"
						defaultValue={DEFAULT_SITE_DATA.site}
						onChange={updateSite}
					/>
					<NoteTypography>
						{"->"} You can try any site you want, example:{" "}
						<span style={{ color: "orange" }}>
							https://www.nationalgeographic.com/animals/article/buy-2000-rhinos-south-africa
						</span>
					</NoteTypography>
				</div>
				<div>
					<BootstrapTextField
						id="selector-input"
						label="Element Selector (ex. )"
						variant="outlined"
						defaultValue={DEFAULT_SITE_DATA.selector}
						onChange={updateSelector}
					/>
					<NoteTypography>
						{"->"} Try other query selector:{" "}
						<span style={{ color: "orange" }}>aside.InlineElement</span>
					</NoteTypography>
				</div>
			</Wrapper>
			<Wrapper>
				<BootstrapButton variant="contained" onClick={scrapSiteData}>
					Take Site ScreenShot
				</BootstrapButton>
			</Wrapper>
			<ContentWrapper>
				<CaptionTypography>
					{"ScreenShot from Selector (Ex. Table)"}
				</CaptionTypography>
				<div>
					{status === STATUSES.loading && (
						<Loader style={{ minWidth: "400px", minHeight: "320px" }} />
					)}
					{selectorImage && status !== STATUSES.loading && (
						<img
							src={selectorImage}
							width={"100%"}
							height={"auto"}
							alt={"Selector query image"}
						/>
					)}
				</div>
				{!selectorImage && (
					<div>
						<EmptyTypography>{"Image cannot generate"}</EmptyTypography>
					</div>
				)}
			</ContentWrapper>
			<ContentWrapper>
				<CaptionTypography>{"ScreenShot of the whole page"}</CaptionTypography>
				<div>
					{status === STATUSES.loading && (
						<Loader style={{ minWidth: "400px", minHeight: "320px" }} />
					)}
					{pageImage && status !== STATUSES.loading && (
						<img
							src={pageImage}
							width={"100%"}
							height={"auto"}
							alt={"Page image"}
						/>
					)}
				</div>
				{!pageImage && (
					<div>
						<EmptyTypography>{"Image cannot generate"}</EmptyTypography>
					</div>
				)}
			</ContentWrapper>
		</>
	);
}
