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
			currentVideo: '',
			playlist: ['pok8H_KF1FA', 'DzwkcbTQ7ZE', 'wXhTHyIgQ_U'],
			playlistData: [],
		};
	}

	componentDidMount() {
		this.state.playlist.forEach(async (vidId) => {
			const data = await getVideo(vidId);
			this.setState({ playlistData: [...this.state.playlistData, data] });
		});
		this.setState({ currentVideo: this.state.playlist[0] });
	}

	render() {
		return (
			<StyledApp>
				<Container>
					<Header>Power Hour</Header>
					<VideoPlayer id={this.state.currentVideo} />
					<button onClick={this.startPlaylist}>Start Power Hour</button>
					<UpNextContainer>Up Next List</UpNextContainer>
				</Container>
			</StyledApp>
		);
	}
}

export default App;
