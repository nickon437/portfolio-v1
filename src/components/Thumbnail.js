import React, { useContext } from 'react';
import { UiContext } from '../context/UiContext';

const Thumbnail = ({ 
    imgSrc, 
    title, 
    snippet,
    description,
    keyFeatures,
    demo,
    techStack,
    site,
    source,
}) => {

    const [ui, setUi] = useContext(UiContext);

    const handleClick = () => {
        setUi((prevUi) => ({
            ...prevUi,
            ctxInfoPane: 'project',
            ctxProjectDetails: {
                imgSrc,
                title, 
                snippet,
                description,
                keyFeatures,
                demo,
                techStack,
                site,
                source,
            }
        }))
    }

    let thumbnail = <div className="thumbnail-text">{title}</div>;
    if (imgSrc !== '') {
        thumbnail = <img src={ imgSrc } alt="Sky vs. Sea" />;
    }

    return (
        <button type="button" className="thumbnail" onClick={handleClick}>
            {/* <img src={ imgSrc } alt="Sky vs. Sea" /> */}
            {thumbnail}
            <div className="thumbnail-description">
                <div className="thumbnail-title">{ title }</div>
                <div>{ snippet }</div>
            </div>
        </button>
    )
}

Thumbnail.propTypes = {

}

export default Thumbnail
