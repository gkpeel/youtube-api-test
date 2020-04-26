import React, { useState, useEffect } from 'react'
import getData from '../apis/youtube'
import Header from './Header'
import VideoPlayer from './VideoPlayer'
import Preview from './Preview'

function App() {
    const playlistIds = ['4NRXx6U8ABQ', 'wXhTHyIgQ_U', 'pok8H_KF1FA'];
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

    const incrementIndex = () => { setCurrentIndex(currentIndex + 1) }

    return (
        <div>
            <Header>Power Hour</Header>
            {contentLoaded ? (
                <VideoPlayer
                    currentVideo={playlist.videos[currentIndex].id}
                    duration={playlist.videos[currentIndex].contentDetails.duration}
                    incrementIndex={incrementIndex}
                />
            ) : (<div>Loading</div>)}
            <div className="playlist-details">
                {playlist.videos.map((video, i) => {
                    return (
                        <div key={i}>{video.snippet.title}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default App