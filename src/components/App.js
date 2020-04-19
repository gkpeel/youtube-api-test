import React, { Component } from 'react';
import { StyledApp, Container, UpNextContainer, VideoPlayerContainer } from '../utils/containers';
import Header from './Header';
import VideoPlayer from './VideoPlayer';
import getVideo from '../apis/youtube';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			started: false,
			currentVideoIndex: 0,
			playlist: ['pok8H_KF1FA', 'DzwkcbTQ7ZE', 'wXhTHyIgQ_U'],
			playlistData: [],
		};
	}

	setNextIndex = () => {
		const nextIndex = this.state.currentVideoIndex + 1;
		console.log(nextIndex)
		console.log('set cb')
		this.setState({ currentVideoIndex: this.state.currentVideoIndex + 1 })
	}

	componentDidMount() {
		this.state.playlist.forEach(async (vidId) => {
			const data = await getVideo(vidId);
			this.setState({ playlistData: [...this.state.playlistData, data] });
		});
		this.setState({ currentVideo: this.state.playlist[this.state.currentVideoIndex] });
	}

	render() {
		return (
			<StyledApp>
				<Container>
					<Header>Power Hour</Header>
					<VideoPlayer
						id={this.state.playlist[this.state.currentVideoIndex]}
						setNextIndex={this.setNextIndex}
					/>
					<button onClick={this.startPlaylist}>Start Power Hour</button>
					<UpNextContainer>Up Next List</UpNextContainer>
				</Container>
			</StyledApp>
		);
	}
}

export default App;
