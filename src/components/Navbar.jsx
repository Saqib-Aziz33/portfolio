import { useState } from 'react';
// icons
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
// css
import '../style/Navbar.css'
// components
import SocialLink from './SocialLink';
import Nav from './Nav';
// data
import data from '../data/data.json'

function Navbar() {
    const [showNav, setShowNav] = useState(false)
    function toggleNav(){
        setShowNav(!showNav)
    }
    
    return <>
        <div>
            <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content bottom-round">
                <div className="flex-1 px-2 mx-2">
                    <span className="text-lg font-bold uppercase">
                        saqib aziz
                    </span>
                </div>
                <div className="flex-none hidden px-2 mx-4 lg:flex">
                    <div className="flex items-stretch">

                        {
                            data.social.map((social, i) => (
                                <SocialLink key={i} to={social.link}>{social.site}</SocialLink>
                            ))
                        }

                    </div>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost" onClick={toggleNav}>
                        <HiOutlineMenuAlt3 size={'1.5rem'} />
                    </button>
                </div>
            </div>
        </div>
        <Nav toggleNav={toggleNav} active={showNav} />
    </>;
}

export default Navbar;