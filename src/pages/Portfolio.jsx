import React from 'react';
import Breadcrum from '../components/Breadcrum';
import Card from '../components/Card';
import data from '../data/data.json'

function Portfolio() {
  const [projects, setProjects] = React.useState(data.projects)
  const [choice, setChoice] = React.useState('all')

  React.useEffect(() => {
    if(choice === 'all'){
      return setProjects(data.projects)
    }
    setProjects(data.projects.filter(project => project.type === choice))
  }, [choice])

  
  return <div className='container my-8 mx-auto'>
    <Breadcrum current='Portfolio' />

    <div className="text-center">
      <select onChange={(e) => setChoice(e.target.value)} class="select w-full max-w-xs text-center shadow-sm text-secondary">
        <option value='all'>All</option>
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
      </select>
    </div>
    
    <div className="my-8">
      {projects.map((project, i) => (
        <Card key={i} title={project.title} i={i} desc={project.desc} link={project.link} lang={project.lang} src={project.img} />
      ))}
    </div>

  </div>;
}

export default Portfolio;
