import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import {getLatestNotification} from './utils'

function Notifications() {
    return (
        <>
            <div className="Notifications">
                <p>Here is the list of notifications</p>
                <ul>
                    <li data-priority="default">New course available</li>
                    <li data-priority="urgent">New resume available</li>
                    <li data-priority="urgent" 
                        dangerouslySetInnerHTML={{
                            __html: getLatestNotification(),
                        }}></li>
                </ul>
                <button
                    style={{
                        float: "right",
                        marginTop: '-150px',
                        marginRight: '-10px',
                        border: 'None',
                    }} 
                    type="button" 
                    aria-label="Close"
                    onClick={() => console.log('Close has been clicked')}
                    >
                        <img src={closeIcon} alt='close'></img>
                    </button>
            </div>
        </>
    );

};

export default Notifications;