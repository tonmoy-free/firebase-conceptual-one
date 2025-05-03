import React, { useContext } from 'react';
import { ValueContext } from '../../RootLayout/RootLayout';
import { Navigate } from 'react-router';

const About = () => {
    // const{user} = useContext(ValueContext);
    // if(!user || !user?.email){
    //     return <Navigate to="/signin"></Navigate>
    // }
    return (
        <div>
            About
        </div>
    );
};

export default About;