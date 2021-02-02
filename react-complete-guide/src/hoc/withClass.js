import React from 'react';

const withClass = (WrappedConponent, className) => {
    return props => (
        <div className={className}>
            <WrappedConponent {...props}/>
        </div>
    ); 
};

export default withClass;