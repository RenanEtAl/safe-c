import React from 'react';

//Components
import ProjectPreview from './ProjectPreview';
import SectionHeader from '../../components/Home/SectionHeader';
import blog from './images/blogkicks.gif';
import sociologist from './images/sociologist.jpeg';
import moor from './images/moor.jpg';
import carbon from './images/carbon.jpeg';


const MoreToExplore = (props) => {
  return (
    <>
      <SectionHeader header={"more to explore"}/>
      <div className="project-preview-containers-container">
        <ProjectPreview
          image={blog}
          description={"Support creative work for its own sake. Back it because you believe in it."}
          authorName={"SafeCrowdfundingBlog"}
        />
        <ProjectPreview
          image={sociologist}
          description={"The sociologist and space engineers behind Orba, Artiphon's new instrument for everyone."}
          authorName={"Core77"}
        />
        <ProjectPreview
          image={moor}
          description={"Moor Mother, Lightning Bolt, Stroom, and Principe know that when it comes to creative disciplines, more is more."}
          authorName={"SafeCrowdfundingBlog"}
        />
        <ProjectPreview
          image={carbon}
          description={"With Climate Neutral Certified, companies take leaps and bounds toward lighter footprints"}
          authorName={"Core77"}
        />
      </div>
    </>
  );
}

export default MoreToExplore;
