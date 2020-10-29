import React from 'react'
import Thumbnail from './Thumbnail';
import Rome from '../assets/img/Rome.png';
import Icons from '../assets/values/Icons';

const Project = () => {

    const PROJECT_DATA = [
        {
            imgSrc: Rome,
            title: 'Rome',
            snippet: 'A simple and realistic IDE platform that teaches young children the fundamentals of computer science',
            description: "This is a collaborative capstone project between RMIT University and L'enfant Corporation that our team worked on in our final year of Master Degree."
            + "The aim of project is creating a simple yet realistic IDE platform to provide children from 6 to 9 years old a basic understanding of computer science.",
            keyFeatures: [
                'executable programming logic',
                'console for command line',
                'memory section illustrating how data is distributed',
                'debug mode',
            ],
            demo: [],
            techStack: [
                Icons.javascript,
                Icons.reactJS,
                Icons.antlr,
                Icons.nodeJS,
                Icons.seleniumWebDriver,
                Icons.jest,
                Icons.appEngine,
            ],
            site: '',
            source: '',
        },
        { 
            imgSrc: '',
            title: 'Sky vs. Sea',
            snippet: 'A board game in which two teams with multiple sets of different skills fight against each other to protect their offspring',
            description: 'This project is for Object-oriented softare design. In Sky vs. Sea, 2 players will play against each other taking the role of Eagle or Shark. '
            + 'The goal of this game is to terminate the offspring (Baby piece) of the enemy’s team and whoever can achieve it first will be the winner of the game. '
            + 'The objective a project is creating an application with a large emphasis on design patterns. A number of patterns that we use in this project includes '
            + 'Abstract Factory Pattern, Prototype Pattern, Command Pattern, Observer Pattern, Proxy Pattern.',
            // keyFeatures: [],
            demo: [],
            techStack: [
                Icons.java,
            ],
            site: '',
            source: '',
        },

    ]

    const thumbnailList = PROJECT_DATA.map((thumbnail) => (
        <Thumbnail 
            imgSrc={thumbnail.imgSrc} 
            title={thumbnail.title} 
            snippet={thumbnail.snippet} 
            description={thumbnail.description}
            keyFeatures={thumbnail.keyFeatures}
            demo={thumbnail.demo}
            techStack={thumbnail.techStack}
            site={thumbnail.site}
            source={thumbnail.source}
        />
    ));

    return (
        <div className="project">
            <h1>Projects</h1>
            <div className="project-list">
                {thumbnailList}
            </div>
        </div>
    )
}

export default Project
