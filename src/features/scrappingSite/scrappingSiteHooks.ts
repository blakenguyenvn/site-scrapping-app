import {
	selectPageImage,
	selectSelectorImage,
	selectStatus,
	fetchScrapSiteDataAsync
} from "./scrappingSiteSlice";

export const useScrappingSiteHooks = () => {
	return {
		selectors: {
			pageImage: selectPageImage,
			selectorImage: selectSelectorImage,
			status: selectStatus
		},
		actions: {
			fetchScrapSiteDataAsync
		}
	};
};
