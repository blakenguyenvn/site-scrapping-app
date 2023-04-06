import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { fetchScrapDataBySite } from "./scrappingSiteAPI";
import { ScrappingSiteState } from "./scrappingSiteType";

const initialState: ScrappingSiteState = {
	pageImage: "",
	selectorImage: "",
	status: "idle"
};

export const fetchScrapSiteDataAsync = createAsyncThunk(
	"scrapping/fetchSiteData",
	async (args: any) => {
		const { site, selector } = args;
		const response = await fetchScrapDataBySite({ site, selector });

		return {
			pageImage: response.result?.page,
			selectorImage: response.result?.selector
		};
	}
);

export const scrappingSiteSlice = createSlice({
	name: "scrappingSite",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchScrapSiteDataAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchScrapSiteDataAsync.fulfilled, (state, action) => {
				const { pageImage, selectorImage } = action.payload;

				state.pageImage = pageImage;
				state.selectorImage = selectorImage;
				state.status = "idle";
			})
			.addCase(fetchScrapSiteDataAsync.rejected, (state) => {
				state.status = "failed";
			});
	}
});

export const selectPageImage = (state: RootState) =>
	state.scrappingSite.pageImage;
export const selectSelectorImage = (state: RootState) =>
	state.scrappingSite.selectorImage;
export const selectStatus = (state: RootState) => state.scrappingSite.status;

export default scrappingSiteSlice.reducer;
