import React from 'react';
import Breadcrum from '../components/Breadcrum';
import Card from '../components/Card';
import data from '../data/data.json'
import img from '../assets/node.png'

function Portfolio() {
  console.log(data.projects[0].src);
  return <div className='container my-8 mx-auto'>
    <Breadcrum current='Portfolio' />
    
    <div className="my-8">
      {data.projects.map((project, i) => (
        <Card key={i} title={project.title} i={i} desc={project.desc} link={project.link} lang={project.lang} src={project.img} />
      ))}
    </div>

  </div>;
}

export default Portfolio;
