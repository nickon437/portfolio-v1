import React from 'react'
import Thumbnail from './Thumbnail';
import screenshot from '../assets/img/screenshot.png';

const Project = () => {
    return (
        <div className="project">
            <Thumbnail imgSrc={screenshot} title="title" snippet="snippet" />
        </div>
    )
}

export default Project
