import React from 'react';
// components
import Badge from './Badge';
import Slider from './Slider';

function Skill() {
  const languages = ['html', 'css', 'javascript', 'react.js', 'node.js', 'express.js', 'mongodb'];
  
  return <div className='skill my-16 flex flex-col items-center' data-aos="zoom-up">
    <h2 className='uppercase text-3xl font-semibold text-center'>MY Skills</h2>
    <div data-aos="zoom-in">
      <Slider />
    </div>
    <p className='text-center text-2xl my-4'>
      <span className='uppercase'>
        {languages.map((language, index) => <Badge key={index} text={language} />)}
      </span>
    </p>
    <div>
      <a href="/static/saqibWebResume.pdf" className='btn btn-primary my-4' download>
        Download my resume
      </a>
    </div>
  </div>;
}

export default Skill;
