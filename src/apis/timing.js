
import { useState, useEffect } from 'react'

const useTiming = (ref) => {
    const [timing, setTiming] = useState({ currentIndex: 0, playedSeconds: 0 })

    useEffect(() => {
        setTiming({ ...timing, playedSeconds: ref.current.getCurrentTime() })
        console.log(timing)
    }, [ref])

    return timing
}

export default useTiming

