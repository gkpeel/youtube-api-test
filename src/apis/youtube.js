import axios from 'axios';

const getData = (vidId) => {
	if (!vidId) {
		return null;
	}

	const options = {
		baseURL: 'https://www.googleapis.com/youtube/v3',
		params: {
			part: 'snippet,contentDetails,player',
			key: process.env.YT_API_KEY,
			id: vidId,
		}
	}
	return axios.get('/videos', options)
};

export default getData;
