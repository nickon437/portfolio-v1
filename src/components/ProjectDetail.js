import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UiContext } from '../context/UiContext';

const ProjectDetail = () => {
    const [ui, setUi] = useContext(UiContext);
    const project = ui.ctxProjectDetails;

    const techStack = project.techStack.map((tech) => (
        <li data-name={tech.name}><img src={tech.logo} alt={tech.alt} data-tooltip="abx"/></li>
    ));

    let keyFeatures = null;
    if (project.keyFeatures && project.keyFeatures.length > 0) {
        keyFeatures = (
            <div>
                <div>Key features:</div>
                <ol>
                    {project.keyFeatures.map((feature) => (<li>{feature}</li>))}
                </ol>
            </div>
        );
    }

    let demo = null;
    if (project.demo && project.demo.length > 0) {
        keyFeatures = (
            <div>
                <div>Demo:</div>
                <ol>
                    {project.demo.map((illustration) => (<li>{illustration}</li>))}
                </ol>
            </div>
        );
    }

    let site = null;
    if (project.site && project.site.length > 0) {
        site = (
            <a href="https://rome.juliabrownschools.com/">
                <button type="button" className="std-btn">
                    Visit site
                </button>
            </a>
        )
    }   

    return (
        <div className="info-pane-content">
            <h1>{project.title}</h1>
            <div className="project-detail-snippet">{project.snippet}</div>
            <div>{project.description}</div>
            {keyFeatures}
            <h2>Technologies:</h2>
            <ul className="tech-stack">{techStack}</ul>
            {demo}
            {site}
        </div>
    )
}

ProjectDetail.propTypes = {

}

export default ProjectDetail
