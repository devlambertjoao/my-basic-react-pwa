import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div>
            <span>About me:</span>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    );
}

export default About
