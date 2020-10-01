
import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'

function Card ({property}) {
    const {index, video } = property;
    return (
        <div id={`card-${index}`} className="card">
            <ReactPlayer url={video}
                        controls
                        width = "300px" height = "300px"/>
            <div className="details">
                <span className="index">{index+1}</span>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;