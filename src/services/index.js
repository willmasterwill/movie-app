import config from "./config.js";

const searchByText = async (searchText) => {
	try {
		const url =
			config.apiUrl + "?s=" + searchText + "&apikey=" + config.apiKey;
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
};

const Services = {
	searchByText,
};

export default Services;
