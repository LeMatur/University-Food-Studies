import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Welcome to:" />
      <h1 className="app__header-h1">The Department of Tourism</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        The tourism industry is one of the largest and most diverse industries
        in the world, We also hope you will enjoy your stay with us but more
        importantly that you will acquire the knowledge and skills that are
        required in the dynamic tourism industry.{' '}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
