import React from 'react';

const validation = (props) => {
    
    let validationMessage = '';
    if (props.textLength < 5) {
        validationMessage = 'Text too short!'
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default validation;