// Packages
import React, { useState, useEffect } from 'react'
import { Loader, Menu, Segment, Progress, Transition } from 'semantic-ui-react'

// Apis
import useYoutubeApi from '../apis/youtube'

// Components
import TopMenu from './Menu'
import Header from './Header'
import VideoPlayer from './VideoPlayer'
import PreviewItem from './PreviewItem'

// Styles
import { StyledApp } from '../utils/containers'

// Data
import { playlistIds } from '../mock-data'


function App() {

    const playlist = useYoutubeApi(playlistIds)

    // Callback passed to player that increments the playlist array once the set playback time is reached
    const incrementIndex = () => {
        setPlaylist({ ...playlist, currentIndex: playlist.currentIndex + 1 })
    }

    return (
        <StyledApp>
            <TopMenu />
            {playlist.isLoaded ? (
                <div style={{ flexGrow: 1, display: "flex", alignItems: "stretch" }}>
                    <VideoPlayer
                        currentIndex={playlist.currentIndex}
                        currentVideo={playlist.videos[playlist.currentIndex].id}
                        duration={playlist.videos[playlist.currentIndex].contentDetails.duration}
                        incrementIndex={incrementIndex}
                    />
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