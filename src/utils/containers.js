import styled from 'styled-components';

const StyledApp = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
	background-color: #121212;
	color: #fff;
`;

const Container = styled.div`
	min-width: 80%;
	margin: 0 auto;
`;

const PlayerContainer = styled.div`
	display: flex;
`

const VideoPlayerContainer = styled.div`
	height: 75vh;
	flex-grow: 1;
`;

const PreviewContainer = styled.div`
	max-width: 350px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 1rem;
`

export { StyledApp, Container, VideoPlayerContainer, PlayerContainer, PreviewContainer };
