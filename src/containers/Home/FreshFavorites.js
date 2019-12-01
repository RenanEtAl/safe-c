import React from 'react';

//Components
import SectionHeader from '../../components/Home/SectionHeader';
import ProjectPreview from './ProjectPreview';
import xmas from './images/xmas.png';
import GLUON from './images/gluon.jpg';
import wicked from './images/wickedly.jpg';
import vinyl from './images/vinyl.jpg';


const FreshFavorites = (props) => {
  return (
    <>
      <SectionHeader header={"FRESH FAVORITES"}/>
      <ProjectPreview 
        image={xmas}
        title={"The You Suck at Christmas Holiday Suckpack"}
        description={"Buy and bundle all my ridiculous projects to give the gift of music so you or your loved ones can start sucking at it... more or less."}
        authorName={"Dr. Joel Pierson"}
      />
      <ProjectPreview 
        image={GLUON}
        title={"GLUON | Modular Desktop Collaborative Robotic Arm by SCA"}
        description={"GLUON desktop robotic arm, powered by INNFOS SCA QDD Lite. A best match for prototyping photography, STEM & geeks."}
        authorName={"INNFOS"}
      />
      <ProjectPreview 
        image={wicked}
        title={"Wickedly Abled: SciFi/Fantasy/Horror by Disabled Authors"}
        description={"Wickedly Abled is a dark speculative fiction anthology that challenges futures that erase the disabled and horror that marginalizes us."}
        authorName={"Sumiko Saulson"}
      />
      <ProjectPreview 
        image={vinyl}
        title={"Globular & Geoglyph: a new collab album, straight to vinyl."}
        description={"Help us bring our new collaboration 'Messages From The Rsonator' to life with a full 180g double gatefold vinyl album"}
        authorName={"Morison Bennett"}
      />
    </>
  );
}

export default FreshFavorites;