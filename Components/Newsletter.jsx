import { TextField } from '@mui/material';
import styles from '../styles/Newsletter.module.css';
import React from 'react';

const Newsletter = () => {
  return (
    <div className={styles.newsletter_container}>
      <h3 className={styles.newsletter_h3}>
        LUMEN8, pronounced ‘luminate’, is a Dubai-based manufacturer and
        retailer of luxury gift items that glow in the dark after exposure to
        UV-light. The treatment is natural, and the bright, glowing colours
        guarantee a real wow factor every time.
      </h3>
      <h3 className={styles.subscribe}>Subscribe to our news letter</h3>
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        className={styles.textnews}
      />
      <button className={styles.btn_newsletter}>Subscribe</button>
    </div>
  );
};

export default Newsletter;
