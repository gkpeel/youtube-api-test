import React, { useState, useEffect } from 'react'
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

const useYoutubeApi = (dataArr) => {
	const [playlist, setPlaylist] = useState({
		contentLoaded: false,
		videos: []
	})

	// Use YT Api from playlist array, set startIndex, set loaded to create render
	useEffect(() => {
		async function fetchData(arr) {
			try {
				const result = await getData(arr.join(','))
				setPlaylist({
					isLoaded: true,
					isPlaying: true,
					videos: result.data.items
				})
			} catch (err) {
				console.log(err)
			}
		}
		if (!playlist.contentLoaded) {
			fetchData(dataArr)
		}
	}, [])

	return playlist
}

export default useYoutubeApi;

