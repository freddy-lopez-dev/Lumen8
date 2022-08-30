<<<<<<< HEAD
import { Link } from '@mui/material';
import React from 'react';

import { client, urlFor } from '../../lib/client';
import styles from '../../styles/Category.module.css';

const categoryDetails = ({ category, products }) => {
  return (
    <section className={styles.category_container}>
      <h3 className={styles.cat_header}>{category.title}</h3>
      <h3 className={styles.cat_desc}>{category.description}</h3>
      <ul className={styles.product_list}>
        {products
          .filter((product) => product.categories[0]._ref === category._id)
          .map((product) => {
            return (
              <li className={styles.product} key={product.name}>
                <Link
                  href={`/product/${product.slug.current}`}
                  className={styles.prod_link}
                >
                  <img
                    src={urlFor(product.defaultProductVariant.images[0])}
                    alt={product.name}
                    className={styles.cat_image}
                  />
                  <h3 className={styles.product_details}>{product.name}</h3>
                  <h3 className={styles.product_details}>
                    {product.defaultProductVariant.price}.00 AED
                  </h3>
                </Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "category"] {
    slug {
      current
    }
  }`;

  const categories = await client.fetch(query);

  const paths = categories.map((category) => ({
    params: {
      slug: category.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "category" && slug.current == '${slug}'][0]`;
  const category = await client.fetch(query);
  const productsQuery = `*[_type == "product"]`;

  const products = await client.fetch(productsQuery);

  return {
    props: { category, products },
  };
};

export default categoryDetails;
=======
import React from 'react';

const [slug] = () => {
  return <div>[slug]</div>;
};

export default [slug];
>>>>>>> 7ab86787acb53fd45804a73e10d44320c7353b57
