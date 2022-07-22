import React from 'react';
import '../style/Input.css'

function Input({type, placeholder, text, textarea}) {
    const textBox = <input id={text} name={text.toLowerCase()} required type={type} placeholder={placeholder} className="input input-bordered" />
    const textArea = <textarea id={text} name={text.toLowerCase()} className="textarea h-24 textarea-bordered" placeholder={placeholder}></textarea>
    return <div>
        <div className="form-control text-secondary">
            <label htmlFor={text} className="label">
                <span className="label-text">{text}</span>
            </label>
            {textarea ? textArea : textBox }
        </div>
    </div>;
}

export default Input;
