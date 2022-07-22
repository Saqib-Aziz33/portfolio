import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrum({current}) {
    return <div className="text-sm breadcrumbs  animate__animated animate__rollIn px-2">
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                {current}
            </li>
        </ul>
    </div>;
}

export default Breadcrum;
