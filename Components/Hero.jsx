import { Link } from '@mui/material';
import React from 'react';

import { urlFor } from '../lib/client';
import styles from '../styles/Heroslider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = ({ banner: { image, largeText1, midText, buttonText } }) => {
  return (
    <SwiperSlide className={styles.hero__banner}>
      <div className={styles.hero__details}>
        <h3 className={styles.header3}>{largeText1}</h3>
        <h4>{midText}</h4>
        <Link href="/#">
          <button className={styles.btn}>{buttonText}</button>
        </Link>
      </div>
      <div className={styles.hero__img}>
        <img src={urlFor(image)} alt="test" width="650" height="650" />
      </div>
    </SwiperSlide>
  );
};

export default Hero;
