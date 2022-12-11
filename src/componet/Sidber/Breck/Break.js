import React from 'react';
import './Breck.css'

const Break = () => {
    return (
        <div className='break'>
            <h2>add a break</h2>
            <div className='break-time'>
                <p><span>15</span>s</p>
                <p><span>25</span>s</p>
                <p><span>35</span>s</p>
                <p><span>45</span>s</p>
                <p><span>55</span>s</p>
            </div>
        </div>
    );
};

export default Break;