import React from 'react';
import ReactPlayer from 'react-player';
import { VideoPlayerContainer } from '../utils/containers';

const BASE_EMBED_URL1 = 'https://www.youtube.com/embed/';
const BASE_EMBED_URL2 = '?autoplay=1&controls=0&disablekb=1&end=60&modestbranding=1&start=30&color=white&iv_load_policy=3';

const trackTiming = (obj, cb) => {
	if (obj.playedSeconds > 10) {
		cb();
	}
};

const VideoPlayer = (props) => {
	console.log(props)
	if (!props.id) {
		return null;
	} else {
		const embedUrl = `${BASE_EMBED_URL1}${props.id}${BASE_EMBED_URL2}`;
		return (
			<VideoPlayerContainer>
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${props.id}`}
					controls={true}
					playing={true}
					width={'100%'}
					onProgress={(obj) => {
						trackTiming(obj, props.setNextIndex)
					}}
				/>
			</VideoPlayerContainer>
		);
	}
};

export default VideoPlayer;
