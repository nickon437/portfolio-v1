import React from 'react'
import Thumbnail from './Thumbnail';
import Rome from '../assets/img/Rome.png';
import Icons from '../assets/values/Icons';
import Gifs from '../assets/values/Gifs';

const Project = () => {

    const PROJECT_DATA = [
        {
            imgSrc: Rome,
            title: 'Rome',
            snippet: 'A simple and realistic IDE platform that teaches young children the fundamentals of computer science',
            description: "This is a collaborative capstone project between RMIT University, L'enfant Corporation and Montessori Education that our team worked on in our final year of Master Degree."
            + "The aim of project is creating a simple yet realistic IDE platform to provide children from 6 to 9 years old a basic understanding of computer science.",
            keyFeatures: [
                'executable programming logic',
                'command line interface',
                'memory section illustrating how data is distributed',
                'debug mode',
            ],
            demo: [
                Gifs.datatypes,
                Gifs.debug,
                Gifs.importIO,
                Gifs.sidebar,
            ],
            techStack: [
                Icons.javascript,
                Icons.reactJS,
                Icons.antlr,
                Icons.nodeJS,
                Icons.seleniumWebDriver,
                Icons.jest,
                Icons.appEngine,
            ],
            site: 'https://rome.juliabrownschools.com/',
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
            demo: [],
            techStack: [
                Icons.java,
            ],
            site: '',
            source: 'https://github.com/nickon437/SkyvsSea/',
        },
        { 
            imgSrc: '',
            title: 'Bees vs. Wasps',
            snippet: 'A game in which player will take the role of a swarm of defender bee to protect the hive and the worker bees from the enemies , and to collect the nectar for the survival of the hive',
            description: 'This is a project for Games and Artificial Intelligent. '
            + 'In this game, player will take the role of a swarm of defender bees to protect the nest and other workers from the wasps. '
            + 'Our team also implement AI with reinforcement learning to the workers so that it can navigate its ways to the flowers while avoiding the enemies at the same time.',
            demo: [
                Gifs.wasp,
                Gifs.flocking,
            ],
            techStack: [
                Icons.unity,
                Icons.csharp,
                Icons.anaconda,
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
