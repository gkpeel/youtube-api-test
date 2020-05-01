import React, { useState, useEffect } from 'react'
import getData from '../apis/youtube'
import Header from './Header'
import VideoPlayer from './VideoPlayer'
import PreviewItem from './PreviewItem'
import { StyledApp } from '../utils/containers'
import TopMenu from './Menu'
import { Loader, Menu, Segment, Progress, Transition } from 'semantic-ui-react'

function App() {
    // Hardcoded Youtube Video IDs
    const playlistIds = ['Wm54XyLwBAk', 'ifwc5xgI3QM', 'gG_dA32oH44', 'KfVIRigPyws', '4NRXx6U8ABQ', 'wXhTHyIgQ_U', 'pok8H_KF1FA'];

    const [playlist, setPlaylist] = useState({ videos: [] })
    const [currentIndex, setCurrentIndex] = useState(null)
    const [contentLoaded, setContentLoaded] = useState(false)

    // Use YT Api from playlist array, set startIndex, set loaded to create render
    useEffect(() => {
        const fetchData = async (arr) => {
            const result = await getData(arr.join(','))
            setPlaylist({ videos: result.data.items })
            setCurrentIndex(0)
            setContentLoaded(true)
        }
        fetchData(playlistIds)
    }, [])

    // Callback passed to player that increments the playlist array once the set playback time is reached
    const incrementIndex = () => {
        setCurrentIndex(currentIndex + 1)
    }

    return (
        <StyledApp>
            <TopMenu />
            <div style={{ paddingLeft: "21px", paddingRight: "21px" }}>
                <Progress size="tiny" color="teal" inverted percent={72} indicating style={{ marginTop: "8px", marginBottom: "6px" }} />
                <Progress size="tiny" color="blue" inverted percent={46} indicating style={{ marginTop: "6px", marginBottom: "8px" }} />
            </div>
            {contentLoaded ? (
                <div style={{ flexGrow: 1, display: "flex", alignItems: "stretch" }}>
                    <Segment inverted very padded style={{ flexGrow: 1, marginBottom: 0 }}>
                        <VideoPlayer
                            currentVideo={playlist.videos[currentIndex].id}
                            duration={playlist.videos[currentIndex].contentDetails.duration}
                            incrementIndex={incrementIndex}
                        />
                    </Segment>
                    <Transition.Group
                        as={Menu}
                        animation="fade up"
                        duration="600"
                        inverted
                        vertical
                        size="massive"
                        style={{ marginTop: 0, height: '100%', overflow: 'hidden' }}
                    >
                        {playlist.videos.map((video, i) => {
                            return (
                                <PreviewItem key={i} image={video.snippet.thumbnails.default.url}>
                                    {video.snippet.title}
                                </PreviewItem>
                            )
                        })}
                    </Transition.Group>
                </div>
            ) : (
                    <Loader inverted size='massive'>Loading</Loader>
                )}
        </StyledApp >
    )
}

export default App