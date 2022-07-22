import React from 'react';
import Breadcrum from '../components/Breadcrum';
import Card from '../components/Card';
import data from '../data/data.json'

function Portfolio() {
  const [projects, setprojects] = React.useState(data.projects)
  console.log(data.projects[0].src);
  return <div className='container my-8 mx-auto'>
    <Breadcrum current='Portfolio' />
    
    <div className="my-8">
      {projects.map((project, i) => (
        <Card key={i} title={project.title} i={i} desc={project.desc} link={project.link} lang={project.lang} src={project.img} />
      ))}
    </div>

  </div>;
}

export default Portfolio;
