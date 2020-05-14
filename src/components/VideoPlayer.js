import React from 'react';
import ReactPlayer from 'react-player';
import { parse, toSeconds } from 'iso8601-duration';
import { Segment } from 'semantic-ui-react';

const setStartTime = (data) => {
	const isoDuration = toSeconds(parse(data))
	return Math.floor(Math.random() * (isoDuration - 61))
}

const setUrl = (data, start) => {
	return `https://www.youtube.com/watch?v=${data}&start=${start}`
}

const VideoPlayer = ({ duration, currentVideo }) => {
	const startTime = setStartTime(duration)

	return (
		<Segment inverted padded style={{ flex: '1 0 auto', margin: '0', paddingBottom: 0, background: 'transparent' }}>
			<ReactPlayer
				muted
				url={setUrl(currentVideo, startTime)}
				controls={false}
				playing={true}
				height={'100%'}
				width={'100%'}
				onProgress={(obj) => {
					console.log(obj)
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
