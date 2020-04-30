import React from 'react';
import ReactPlayer from 'react-player';
import { parse, toSeconds } from 'iso8601-duration';

// Once video has played for 20 seconds after the startTime, fire the callback
const trackTiming = (obj, startTime, cb) => {
	if (obj.playedSeconds > startTime + 10) {
		cb();
	}
};

const setStartTime = (data) => {
	const isoDuration = toSeconds(parse(data))
	return Math.floor(Math.random() * (isoDuration - 61))
}

const setUrl = (data, start) => {
	return `https://www.youtube.com/watch?v=${data}&start=${start}`
}

const VideoPlayer = (props) => {

	const startTime = setStartTime(props.duration)
	return (
		<ReactPlayer
			url={setUrl(props.currentVideo, startTime)}
			controls={false}
			playing={true}
			height={'100%'}
			width={'100%'}
			onProgress={(obj) => {
				trackTiming(obj, startTime, props.incrementIndex)
			}}
			config={{
				youtube: {
					preload: true
				}
			}}
		/>
	)
};

export default VideoPlayer;
