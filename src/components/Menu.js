import React from 'react'
import { Container, Header, Icon, Menu, Segment } from 'semantic-ui-react'

const TopMenu = (props) => {
    return (
        <Container fluid>
            <Menu
                inverted
                attached="top"
            >
                <Menu.Item>
                    <Header inverted as="h2">The Power Hour</Header>
                </Menu.Item>
                <Menu.Item position="right">
                    <Icon name="user" />
                </Menu.Item>
            </Menu>
        </Container>
    )
}

export default TopMenu;