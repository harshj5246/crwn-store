import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className='homepage' 
    style={{
        backgroundImage: `url("https://i.ibb.co/cvpntL1/hats.png"))`
    }}>
        <Directory />
    </div>
);

export default HomePage;