import React from 'react';

//Components
import SectionHeader from '../../components/Home/SectionHeader';
import ProjectPreview from './ProjectPreview';
import orba from './images/featured-project.gif';

const FeaturedProject = (props) => {
  return (
    <div className="feature-project-component-container">
      <SectionHeader header={"featured project"}/>
      <ProjectPreview
        image={orba}
        title={"Orba - A musical instrument designed for your hands"}
        description={"A portable synth, looper, and MIDI controller that lets you create songs in seconds."}
        authorName={"Artiphon"}
      />
    </div>
  );
}

export default FeaturedProject;