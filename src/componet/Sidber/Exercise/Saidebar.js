import React from 'react';
import Author from '../Author';
import Break from '../Breck/Break';
import Details from '../Details';
import Exercise from './Exercise';

const Saidebar = () => {
    return (
        <div className='sidebar'>
            <Author></Author>
            <Details></Details>
            <Break></Break>
            <Exercise></Exercise>
        </div>
    );
};

export default Saidebar;