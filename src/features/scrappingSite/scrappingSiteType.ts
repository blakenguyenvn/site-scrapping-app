export interface ScrappingSiteParam {
	site: string;
	selector: string;
}

export interface ScrappingSiteState {
	pageImage: string | null;
	selectorImage: string | null;
	status?: "idle" | "loading" | "failed";
}
