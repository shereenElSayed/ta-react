import React from "react"

function Joke(props) {
    let joke = ""
    if (props.question){
        joke = `Question: ${props.question}\n`
    }
    if (props.punchLine){
        joke += `PunchLine: ${props.punchLine}`
    }
    return (
        <p>Joke: {joke}</p>
    )
}

export default Joke