// components
import Hero from '../components/Hero';
import Skill from '../components/Skill';
import Work from '../components/Work';
// css
import '../style/Index.css'

function Index() {
  const aboutMe = <>Full Stack Javascript Developer 💻</>


  return <div>

    <div className="hero-wrapper text-secondary">
      <Hero heading='Saqib Aziz' subheading={aboutMe} linktext='My Work' linkurl='/portfolio' />
    </div>

    <Skill />

    <Work />
  </div>;
}

export default Index;
