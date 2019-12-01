import React, { Component } from 'react';

//Components
import SectionHeader from '../../components/Home/SectionHeader';
import ProjectPreview from './ProjectPreview';
import NumberedSelector from '../../components/Home/NumberedSelector'
import farm from './images/farmurban.png';
import music from './images/music.jpg';
import greenstore from './images/wally.png';

const Recommended = (props) => {
  return (
    <div className="recommended-component-container">
      <SectionHeader header={"recommended"}/>
      <ProjectPreview
        image={farm}
        title={"Greens For Good: Vertical Farming with a Social Mission"}
        percentage={"59"}
        authorName={"Farm Urban"}
        heart={true}
      />
      <ProjectPreview
        image={music}
        title={"Save the Tunes: The John Hartford Fiddle Tune Project"}
        percentage={"96"}
        authorName={"Eric Hogue and KatieHarford Hogue"}
        heart={true}
      />
      <ProjectPreview
        image={greenstore}
        title={"The Wally Shop: the everything in reusable store"}
        percentage={"72"}
        authorName={"The Wally Shop"}
        heart={true}
      />
      <NumberedSelector/>
    </div>
  );
}

export default Recommended;