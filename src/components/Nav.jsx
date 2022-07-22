import React from 'react';
import {NavLink } from 'react-router-dom';
// icons
import {AiOutlineClose} from 'react-icons/ai'
// css
import '../style/Nav.css'
import Switch from './Switch'

function Nav({toggleNav, active}) {
    const iconSize = '1.5rem'
  return <nav className={active ?'active': ''} id='toggleable-nav'>
            <button onClick={toggleNav} className='btn btn-ghost btn-sm rounded-btn close-btn'>
                <AiOutlineClose size={iconSize} />
            </button>
            <div className="content">
                <ul>
                    <li>
                        <NavLink onClick={toggleNav} className='text-4xl' to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleNav} className='text-4xl' to={'/portfolio'}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleNav} className='text-4xl' to={'/contact'}>Contact</NavLink>
                    </li>
                    <li>
                        <Switch />
                    </li>
                </ul>
            </div>
        </nav>
}

export default Nav;