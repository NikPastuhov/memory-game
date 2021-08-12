import React from 'react';

import './tab.scss';

const Tab = ({isVisible, records}) => {
    return (
        <>
            { isVisible && (
                records.map((record, index) => {
                    return (
                        <div className="records-row" key={index}>
                            <div>{index+ 1 }</div>
                            <div>{record.name}</div>
                            <div>{record.time}</div>
                        </div>
                    )
                })
                )
            }
        </>
    );
};

export default Tab;