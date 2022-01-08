import React, { useState, useEffect } from 'react'

function Time() {
    const [timeCur, setTimeCur] = useState("Time Loading...")


    useEffect(() => {
        setTimeCur(new Date().toString())
    }, [])

    return (
        <>
            <span style={{ fontSize: "20px", cursor: "pointer", color: "white", display: "inline-block" }} className="nav"  > {timeCur}</span>
        </>
    )
}

export default Time
