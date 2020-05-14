// Packages
import React, { useState, useEffect } from 'react'
import { Loader } from 'semantic-ui-react'

// Apis
import useYoutubeApi from '../apis/youtube'

// Components
import TopMenu from './Menu'
import Player from './Player'

// Styles
import { StyledApp } from '../utils/containers'

// Data
import { playlistIds } from '../mock-data'


function App() {

    const playlist = useYoutubeApi(playlistIds)

    return (
        <StyledApp>
            <TopMenu />
            {playlist.isLoaded ? (<Player playlist={playlist} />) : (<Loader inverted size='massive'>Loading</Loader>)}
        </StyledApp >
    )
}

export default App