import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import userImg from '../assets/saqib.png';

function Hero({heading, subheading, linktext, linkurl}) {
    return <div>
        <div className="hero hero-custom text-dark-c">
            <div className="text-center hero-content  animate__animated animate__flipInX">
                <div className="max-w-md">
                    <Avatar img={userImg} />
                    <h1 className="mb-5 text-5xl font-semibold">
                        {heading}
                    </h1>
                    <p className="mb-5 text-lg">
                        {subheading}
                    </p>
                    <Link to={linkurl} className="btn btn-primary">{linktext}</Link>
                </div>
            </div>
        </div>
    </div>;
}

export default Hero;