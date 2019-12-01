import React from 'react';

//Components
import FeaturedAuthor from '../../components/Home/FeaturedAuthor';
import PublicationBlurb from '../../components/Home/PublicationBlurb';
import logo from './images/swirl-transparent-3.png';
import desiree from './images/Desiree-Akhavan.jpg';
import alicia from './images/alicia.jpg';
import bjork from './images/bjork.jpg';
import naama from './images/naamapassport.jpg';
import john from './images/caleJohn.jpg';
import stevie from './images/Nicks-Stevie.jpg';

const FeaturedAuthors = (props) => {
  return (
    <>
    {
      props.publicationBlurb ? 
      <div className="publication-blurb">
        <PublicationBlurb
          image={logo}
          title={"The Creative Independent"}
          description={"A growing resource of emotional and practical guidance for creative people."}
          basicLinkTitle={"Visit The Creative Independent"}
          link={"/"}
        />
      </div> : null
    }
      <div className="dotted-border">
          <FeaturedAuthor 
            authorName={"Desiree Akhavan"} 
            description={"on working on both sides of the camera."}
            image={desiree}
          />
          <FeaturedAuthor 
          authorName={"Alicia Bognanno"} 
          description={"on managing your creative time."}
          image={alicia}
          />
          <FeaturedAuthor 
            authorName={"Naama Tsabar"} 
            description={"on taking control of your process."}
            image={naama}
          />
          <FeaturedAuthor 
            authorName={"Bjork"} 
            description={"on nature and technology."}
            image={bjork}
          />
          <FeaturedAuthor 
            authorName={"John Cale"} 
            description={"on revisiting your work."}
            image={john}
          />
          <FeaturedAuthor 
            authorName={"Stevie Nicks"} 
            description={"on the importance of being a romantic."}
            image={stevie}
          />
        </div>
    </>
  );
}

export default FeaturedAuthors;