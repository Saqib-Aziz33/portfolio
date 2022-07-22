import React from 'react';
import {BsSun} from 'react-icons/bs'
import {BsMoon} from 'react-icons/bs'
import '../style/Switch.css'

function Switch() {
    function handleChange(e){
        if(e.target.checked){
            document.body.classList.add('dark-theme')
        }
        else{
            document.body.classList.remove('dark-theme')
        }
    }
    return <div className='switch-wrapper'>
        <BsSun size={'1.4rem'} />
        <label className="switch">
            <input onChange={handleChange} type="checkbox" />
                <span className="slider"></span>
        </label>
        <BsMoon size={'1.4rem'} />
    </div>;
}

export default Switch;
