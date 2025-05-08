'use client'
import React, { useState } from 'react';

const ReadMoreText = ({ text, maxChars = 300 }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleText = () => setExpanded(!expanded);

    const displayText = expanded ? text : text.slice(0, maxChars) + (text.length > maxChars ? '...' : '');

    const renderParagraph = (content) => {
        return content.split('\n').map((para, index) => (
            <p key={index} className='mb-4'>{para}</p>
        ))
    }
    return (
        <div>
            <h1>{renderParagraph(displayText)}</h1>
            {text.length > maxChars && (
                <button onClick={toggleText} className="text-blue-500 hover:underline mt-2">
                    {expanded ? 'Read Less' : 'Read More'}
                </button>
            )}
        </div>
    );
};

export default ReadMoreText;
