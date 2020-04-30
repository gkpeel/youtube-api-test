import React from 'react'
import { Icon, Menu, Segment } from 'semantic-ui-react'

const TopMenu = (props) => {
    return (
        <Segment inverted>
            <Menu
                inverted
                attached="top"
            >
                <Menu.Item
                    name="The Power Hour"
                    active
                />
                <Menu.Item position="right">
                    <Icon name="user" />
                </Menu.Item>
            </Menu>
        </Segment>
    )
}

export default TopMenu;