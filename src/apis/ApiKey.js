import axios from "axios";
const KEY = "AIzaSyCknkEU6MXgSCvo-fEWM01fj3ncSntbiOU";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY,
	},
});
