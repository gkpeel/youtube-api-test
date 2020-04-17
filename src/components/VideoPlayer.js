import React, { Component } from 'react';

class VideoPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		var key = process.env.YT_API_KEY;
		console.log(key);
		console.log('component ready');
	}

	render() {
		return <div>Video Player</div>;
	}
}

export default VideoPlayer;
