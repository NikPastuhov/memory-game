import React from 'react';

const TabButton = ({text, value, name, defaultChecked}) => {
    return (
        <div className="tab-button">
            <input
                className="custom-radio"
                type="radio"
                id={value}
                name={name}
                value={value}
                defaultChecked={defaultChecked}
            />
            <label className="tab-button-text" htmlFor={value}>
                <span>{text}</span>
            </label>
        </div>
    );
};

export default TabButton;