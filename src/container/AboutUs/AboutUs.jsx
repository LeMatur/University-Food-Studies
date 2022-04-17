import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          The Department of Recreation and Tourism [DRT] was opened at the
          University of Zululand in January 2000 (then known as the Centre for
          Recreation and Tourism) within the Faculty of Arts. This was in direct
          response to the call by the national government that listed Tourism as
          one of the priority areas which requires skills some of which are
          regarded as “scarce skills”. In all its activities the Department of
          Recreation and Tourism is guided by its vision, mission and goals
          which are based on the broad vision, mission and values of the
          University of Zululand.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.knife} alt="about_knife" /> */}
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Vision</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          The vision of the DRT is in line with that of the University of
          Zululand. The DRT is committed to being the leading comprehensive
          academic department of the University of Zululand providing sound
          knowledge in the field of Recreation and Tourism and quality career
          focused undergraduate and post graduate programmes including research
          in partnership with the local and global community.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
