import React from 'react'
import { Menu, Transition } from 'semantic-ui-react'
import PreviewItem from './PreviewItem'

const Sidebar = ({ videos }) => {
    return (
        <Transition.Group
            as={Menu}
            animation="fade up"
            duration="600"
            inverted
            vertical
            size="massive"
            style={{ marginTop: 0, overflow: 'hidden' }}
        >
            {videos.map((video, i) => {
                return (
                    <PreviewItem key={i} image={video.snippet.thumbnails.default.url}>
                        {video.snippet.title}
                    </PreviewItem>
                )
            })}
        </Transition.Group>
    )
}

export default Sidebar