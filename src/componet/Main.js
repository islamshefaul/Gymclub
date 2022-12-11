import React from 'react';
import Saidebar from './Sidber/Exercise/Saidebar';
import Card from './Top/Card';
import Top from './Top/Top';

const Main = () => {
    return (
        <div className='main'>
            <div className='left'>
               <Top></Top> 
               <Card></Card>
            </div>
            <div className='right'>
                <Saidebar></Saidebar>
            </div>
        </div>
    );
};

export default Main;