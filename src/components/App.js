import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import VideoPlayer from './VideoPlayer';

const StyledApp = styled.div`
	min-height: 100vh;
	background-color: #ddd;
`;

const Container = styled.div`
	max-width: 1024px;
	margin: 0 auto;
`;

const UpNextContainer = styled.div`
	background-color: navy;
`;

const VideoPlayerContainer = styled.div`
	min-height: 300px;
	background-color: olive;
`;

const App = (props) => {
	return (
		<StyledApp>
			<Container>
				<Header>Power Hour</Header>
				<VideoPlayerContainer>
					<VideoPlayer />
				</VideoPlayerContainer>
				<UpNextContainer>Up Next List</UpNextContainer>
			</Container>
		</StyledApp>
	);
};

export default App;
