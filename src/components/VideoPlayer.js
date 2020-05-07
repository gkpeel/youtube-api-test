import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ProgressBars from './ProgressBars';
import { parse, toSeconds } from 'iso8601-duration';
import { Segment, Progress } from 'semantic-ui-react';

// Once video has played for 20 seconds after the startTime, fire the callback
const trackTiming = (obj, startTime, cb1) => {
	const vidDuration = 10
	const endTime = startTime + vidDuration

	if (obj.playedSeconds > endTime) {
		cb1();
	}
};

const trackPercentage = (obj, currentPercentage) => {
	console.log(currentPercentage)
	console.log(obj)
	currentPercentage = obj.playedSeconds
}

const setStartTime = (data) => {
	const isoDuration = toSeconds(parse(data))
	return Math.floor(Math.random() * (isoDuration - 61))
}

const setUrl = (data, start) => {
	return `https://www.youtube.com/watch?v=${data}&start=${start}`
}

const VideoPlayer = (props) => {

	const playerRef = useRef();
	console.log(playerRef)
	const startTime = setStartTime(props.duration)
	return (
		<Segment inverted padded style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, marginBottom: 0 }}>
			<ProgressBars totalPlayed={props.currentIndex} currentPlayed={0} />
			<ReactPlayer
				ref={playerRef}
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
		</Segment>
	)
};

export default VideoPlayer;
