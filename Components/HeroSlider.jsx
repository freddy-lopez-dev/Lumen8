import React from 'react';
import Image from 'next/image';
import { styles } from '../styles/Heroslider.module.css';
import { Link } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { urlFor } from '../lib/client';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectFade, Pagination, Autoplay } from 'swiper';

const Heroslider = ({ bannerData }) => {
  return (
    <section className={styles.hero_container}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
          speed: 100,
        }}
        effect={'fade'}
        className={styles.hero}
      >
        {bannerData
          ?.sort((a, b) => a.desc - b.desc)
          .map(({ index, largeText1, largeText2, buttonText, image }) => {
            return (
              <SwiperSlide className={styles.hero__banner} key={index}>
                <div className={styles.hero__details}>
                  <h3 className={styles.header3}>{largeText1}</h3>
                  <h3 className={styles.header3}>{largeText2}</h3>
                  <button className={styles.btn_slider}>{buttonText}</button>
                </div>
                <div className={styles.hero__img}>
                  <img
                    src={urlFor(image)}
                    alt="test"
                    width="650"
                    height="650"
                  />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Heroslider;
