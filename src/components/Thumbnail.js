import React from 'react'
import PropTypes from 'prop-types'

const Thumbnail = ({ imgSrc, title, snippet }) => {
    return (
        <div className="thumbnail">
            <img src={ imgSrc } alt="image"></img>
            <div className="thumbnail-description">
                <div>{ title }</div>
                <div>{ snippet }</div>
            </div>
        </div>
    )
}

Thumbnail.propTypes = {

}

export default Thumbnail
