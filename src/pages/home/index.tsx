import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <span>This is my pwa application</span>
            <Link to="/about">
                <button>About</button>
            </Link>
        </div>
    );
}

export default Home

