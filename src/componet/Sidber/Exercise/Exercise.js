import React from 'react';
import './Exercis.css'

const Exercise = () => {
    return (
        <div className='exercise'>
            <h2>Exersices details</h2>
            <div className='exercise-time'>
                <h4>Exercise time</h4>
                <p>200 <span>seconds</span></p>
            </div>
            <div className='break-times'>
                <h4>Break time</h4>
                <p>200 <span>seconds</span></p>
            </div>
        </div>
    );
};

export default Exercise;