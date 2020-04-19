import axios from 'axios';

const getVideo = async (videoID) => {
	if (!videoID) {
		return null;
	}
	const response = await axios.get('/videos', {
		baseURL: 'https://www.googleapis.com/youtube/v3',
		params: {
			part: 'snippet',
			key: process.env.YT_API_KEY,
			id: videoID,
		},
	});
	return response;
};

export default getVideo;
