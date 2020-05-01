import React from 'react'
import styled from 'styled-components'
import { Card, Header, Image, Menu } from 'semantic-ui-react'

const StyledPreviewItem = styled.div`
    display: flex;
    align-items: center;
    & h4.header {
        margin-top: 0;
        margin-left: 0.5rem;
        color: #fff;
    }
    &:last-of-type{
        margin-bottom: 0
    }
`

const PreviewItem = (props) => {
    return (
        <Menu.Item key={props.id}>
            <StyledPreviewItem>
                <Image src={props.image} />
                <Header as="h4">{props.children}</Header>
            </StyledPreviewItem>
        </Menu.Item>
    )
}

export default PreviewItem