import React from 'react'
import yay from '../assets/yay.png';

export default function Intro() {
    return (
        <div id="intro">
            <div className="heading">Hi, I am Nick <img src={yay} alt="yay icon"/></div>
            <div className="content">A front-end developer who wants to bring the optimal experience to <strong>users</strong> through intuitive design and <strong>fellow developers</strong> through clean code.</div>
            <div className="content">Read more <button type="button" className="link">about me</button> or <button type="button" className="link">contact me</button>.</div>
        </div>
    )
}
