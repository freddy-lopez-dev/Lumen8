import { style } from '@mui/system';
import React from 'react';
import styles from '../styles/Homecategory.module.css';
import { urlFor } from '../lib/client';
import { Link } from '@mui/material';

const HomeCategory = ({ categoryData }) => {
  return categoryData
    ?.sort((a, b) => a.sort - b.sort)
    .map((category) => (
      <section className={styles.home_category} key={category.index}>
        <div className={styles.category_card}>
          <img
            className={styles.category_image}
            src={urlFor(category.image[0])}
            alt={category.title}
          />
          <div className={styles.category_details}>
            <h3 className={styles.category_title}>{category.title}</h3>
            <p className={styles.category_p}>{category.description}</p>
            <Link href={`/category/${category.slug.current}`}>
              <button className={styles.btn_slider}>Shop Collection</button>
            </Link>
          </div>
        </div>
      </section>
    ));
};

export default HomeCategory;
