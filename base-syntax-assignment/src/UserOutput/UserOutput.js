import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.username}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex sapien, aliquam eget est eget, placerat lobortis magna. Vestibulum in ullamcorper tellus. Cras metus enim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id gravida sem. Morbi id scelerisque quam, sagittis lacinia sem. Donec eleifend blandit nunc a viverra.</p>
        </div>
    )
}

export default userOutput;