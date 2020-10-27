import React from 'react';
import Icons from '../assets/values/Icons';

const About = () => {
    const toolData = [
        Icons.java,
        Icons.sceneBuilder,
        Icons.javascript,
        Icons.nodeJS, 
        Icons.reactJS, 
        Icons.antlr, 
        Icons.junit, 
        Icons.jest, 
        Icons.seleniumWebDriver, 
        Icons.mySQL, 
        Icons.appEngine, 
        Icons.git, 
    ];

    const toolList = toolData.map((tool) => (
        <li data-name={tool.name}><img src={tool.logo} alt={tool.alt} data-tooltip="abx"/></li>
    )); 

    return (
        <div id="about" className="info-pane-content">
            <h1>About</h1>
            <div>A software engineer who loves to collab and build intuitive, maintainable and scalable applications. I have experienced in working in Agiled environments with an emphasis on utilizing best practices to create software that meets requirements and schedule.</div>
            <h2>Technologies I work with:</h2>
            <ul>{toolList}</ul>
        </div>
    )
}

export default About;
