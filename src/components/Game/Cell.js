import React from 'react';

const Cell = ({isFlipped, onClick, card}) => {

    let className = 'cell';
    if (isFlipped) {
        className += ' flipped';
    }

    return (
        <div
            className={className}
            onClick={onClick}
        >
            <div className="inner">
                <div className="front">
                    <img src={`/images/${card.src}`} />
                </div>
                <div className="back"></div>
            </div>
        </div>
    );
};

export default Cell;