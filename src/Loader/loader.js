import React from 'react';

const loader = () => {
    return (
        <svg style={{margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto',marginTop:'200px'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="22" strokeWidth="8" stroke="#0a0a0a" strokeDasharray="34.55751918948772 34.55751918948772" fill="none" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.639344262295082s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
            </svg>

    );
};

export default loader;