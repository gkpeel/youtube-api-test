import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressBars = ({ totalPlayed, currentPlayed }) => {
    console.log(totalPlayed, currentPlayed)

    const currentPercentage = currentPlayed / 60 * 100
    const TotalPercentage = totalPlayed / 60 * 100

    return (
        <div style={{ marginTop: '8px', marginBottom: '8px' }}>
            <Progress inverted indicating size="tiny" color="teal" percent={TotalPercentage} style={{ marginBottom: "6px" }} />
            <Progress inverted indicating size="tiny" color="blue" percent={currentPercentage} />
        </div>
    )
}

export default ProgressBars;