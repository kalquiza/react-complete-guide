import React from 'react';

const withClass = (WrappedConponent, className) => {
    return props => (
        <div className={className}>
            <WrappedConponent />
        </div>
    ); 
};

export default withClass;