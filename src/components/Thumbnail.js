import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ imgSrc, title, snippet }) => {
    return (
        <button type="button" className="thumbnail">
            <img src={ imgSrc } alt="image"></img>
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
