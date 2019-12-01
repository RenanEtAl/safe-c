import React from 'react';

//Components
import CategoryBar from './CategoryBar';
import FeaturedProject from './FeaturedProject';
import Recommended from './Recommended';
import SquareButton from '../../components/Home/SquareButton';
import FreshFavorites from './FreshFavorites';
import FeaturedAuthors from './FeaturedAuthors';
import MoreToExplore from './MoreToExplore';

const Home = (props) => {
  return (
    <div className="home">
      <CategoryBar/>
      <div className="featured-recommended-container">
        <div className="featured-project-container">
          <FeaturedProject/>
        </div>
        <div className="recommended-container">
          <Recommended/>
        </div>
      </div>
      <div className="discover-container">
        <h3>Discover the best and brightest projects on Safe Crowdfunding</h3>
        <h2>Back it because you believe in it.</h2>
        <p>Safe Crowdfunding is a Dapp built on the Ethereum blockchain that uses the cryptocurrency Ethereum (ETH).</p>
          <p>With Safe Crowdfunding, users can create crowdfunding campaigns, accept contributions from users, and claim funds if your goal is met and approved.</p>
        <p>Sign up to receive our weekly Project We Love newsletter.</p>
        <div className="square-button">
          <SquareButton title={"Subscribe"}/>
        </div>
      </div>
      <div className="fresh-favorites-container">
        <FreshFavorites/>
      </div>
      <div className="featured-authors-container">
        <FeaturedAuthors publicationBlurb={true}/>
      </div>
      <div className="more-to-explore-container">
        <MoreToExplore/>
      </div>
    </div>
  );
}

export default Home;