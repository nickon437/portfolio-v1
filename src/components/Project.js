import React from 'react'
import Thumbnail from './Thumbnail';
import Rome from '../assets/img/Rome.png';

const Project = () => {
    return (
        <div className="project">
            <Thumbnail imgSrc={Rome} title="Rome" snippet="An simple and realistic IDE platform that teaches young children the fundamentals of computer science" />
        </div>
    )
}

export default Project
