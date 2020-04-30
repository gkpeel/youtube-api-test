import React, { useState, useEffect } from 'react'
import getData from '../apis/youtube'
import Header from './Header'
import VideoPlayer from './VideoPlayer'
import PreviewItem from './PreviewItem'
import { StyledApp, Container, PlayerContainer } from '../utils/containers'
import TopMenu from './Menu'
import { Sidebar, Segment, Menu } from 'semantic-ui-react'

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
    const incrementIndex = () => { setCurrentIndex(currentIndex + 1) }

    return (
        <StyledApp>
            <TopMenu />
            <div style={{ flexGrow: 1, display: "flex", alignItems: "stretch" }}>
                <Segment inverted style={{ flexGrow: 1 }}>
                    {contentLoaded ? (
                        <VideoPlayer
                            currentVideo={playlist.videos[currentIndex].id}
                            duration={playlist.videos[currentIndex].contentDetails.duration}
                            incrementIndex={incrementIndex}
                        />
                    ) : (
                            <div>Loading</div>
                        )}
                </Segment>
                <Menu inverted vertical size="massive">
                    {playlist.videos.map((video, i) => {
                        if (i <= currentIndex + 4 && i >= currentIndex) {
                            return (
                                <PreviewItem
                                    key={i}
                                    image={video.snippet.thumbnails.default.url}
                                >
                                    {video.snippet.title}
                                </PreviewItem>
                            )
                        }
                    })}
                </Menu>

            </div>
        </StyledApp >
    )
}

export default App