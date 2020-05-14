import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressBars = (props) => {

    return (
        <div style={{ marginBottom: 0, maxWidth: '100%', padding: '0 21px' }}>
            <Progress inverted indicating size="tiny" color="teal" percent={0} style={{ marginBottom: "6px" }} />
            <Progress inverted indicating size="tiny" color="blue" percent={12} style={{ marginBottom: 0 }} />
        </div>
    )
}

export default ProgressBars;