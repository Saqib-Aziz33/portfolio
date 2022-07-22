import CardVertical from "./CardVertical";
import MoreCard from "./MoreCard";
import data from '../data/data.json'

// copy 2 projects
const demoWork = data.projects.filter(project => project.title === 'Mi Store Clone' || project.title === 'Github Finder')

function Work() {
  return <div className='container my-10 mx-auto'>
      <h2 className="text-3xl uppercase font-semibold text-center">My Work</h2>
      <div className="my-4 grid sm:grid-cols-3 gap-6 grid-cols-1">
        {demoWork.map((work, i) => (
          <CardVertical title={work.title} desc={work.desc} link={work.link} img={work.img} key={i} />
        ))}
        <MoreCard link='/portfolio' />
      </div>
  </div>;
}

export default Work;