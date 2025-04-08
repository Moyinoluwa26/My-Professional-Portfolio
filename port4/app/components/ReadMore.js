import React, { useState } from 'react';

const ReadMoreText = ({ text, maxChars = 300 }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleText = () => setExpanded(!expanded);

    const displayText = expanded ? text : text.slice(0, maxChars) + (text.length > maxChars ? '...' : '');

    return (
        <div>
            <p>{displayText}</p>
            {text.length > maxChars && (
                <button onClick={toggleText} className="text-blue-500 hover:underline mt-2">
                    {expanded ? 'Read Less' : 'Read More'}
                </button>
            )}
        </div>
    );
};

export default ReadMoreText;
