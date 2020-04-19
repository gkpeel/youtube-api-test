import React from 'react';
import ReactPlayer from 'react-player';
import { VideoPlayerContainer } from '../utils/containers';

const BASE_EMBED_URL1 = 'https://www.youtube.com/embed/';
const BASE_EMBED_URL2 = '?autoplay=1&controls=0&disablekb=1&end=60&modestbranding=1&start=30&color=white&iv_load_policy=3';

const trackTiming = ({ playedSeconds }) => {
	console.log(playedSeconds);
};

const VideoPlayer = (props) => {
	if (!props.id) {
		return null;
	} else {
		const embedUrl = `${BASE_EMBED_URL1}${props.id}${BASE_EMBED_URL2}`;
		return (
			<VideoPlayerContainer>
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${props.id}`}
					controls={false}
					playing={true}
					width={'100%'}
					onProgress={trackTiming}
				/>
			</VideoPlayerContainer>
		);
	}
};

export default VideoPlayer;
