import React from 'react'
import styled from 'styled-components'

const StyledPreviewItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    & h3 {
        margin-left: 0.5rem;
    }
    &:last-of-type{
        margin-bottom: 0
    }
`

const PreviewItem = (props) => {
    return (
        <StyledPreviewItem key={props.id}>
            <img src={props.image} />
            <h3>{props.children}</h3>
        </StyledPreviewItem>
    )
}

export default PreviewItem