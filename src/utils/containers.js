import styled from 'styled-components';

const StyledApp = styled.div`
	background-color: #121212;
	color: #fff;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const Body = styled.div`
	flex-grow: 1;
	max-height: 100%;
	overflow: hidden; 
	display: flex;
	padding: 21px;
`

const SidebarContainer = styled.div`
	max-height: 100%;
	overflow-y: scroll;
	margin-left: 10px;
`

const VideoPlayerContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
	margin: 0;
`

export { StyledApp, Body, VideoPlayerContainer, SidebarContainer };
