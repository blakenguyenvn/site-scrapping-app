import { ScrappingSiteParam } from "./scrappingSiteType";

const API_URL = "http://13.229.209.73:3000/scrap";

async function postData(url = "", data = {}) {
	const response = await fetch(url, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
			dataType: "json"
		},
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify(data)
	});

	console.log("response: \n", response);
	return response.json();
}

export const fetchScrapDataBySite = async ({
	site,
	selector
}: ScrappingSiteParam): Promise<any> => {
	const response = await postData(API_URL, { site, selector });
	console.log("response 2: \n", response);
	return response;
};
