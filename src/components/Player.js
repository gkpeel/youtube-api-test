import React, { useState } from 'react'
import Video from './VideoPlayer'
import Sidebar from './Sidebar'
import ProgressBars from './ProgressBars'
import { Body, SidebarContainer, VideoPlayerContainer } from '../utils/containers.js'
import useTiming from '../apis/timing'


const Player = ({ playlist }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <Body>
            <VideoPlayerContainer>
                <ProgressBars />
                <Video
                    currentVideo={playlist.videos[currentIndex].id}
                    duration={playlist.videos[currentIndex].contentDetails.duration}
                />
            </VideoPlayerContainer>
            <SidebarContainer>
                <Sidebar videos={playlist.videos} />
            </SidebarContainer>
        </Body>
    )
}

export default Player