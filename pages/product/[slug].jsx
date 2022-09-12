import { Link, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from '../../styles/ProductDetails.module.css';
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products, category }) => {
  const {
    decQty,
    incQty,
    qty,
    onAdd,
    setShowCart,
    variant,
    glowVar,
    unglowVar,
  } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  const shuffleProducts = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <section>
      {variant == 'glow' ? (
        <div className={styles.product_details}>
          <div>
            <img
              src={urlFor(product.defaultProductVariant.images[0])}
              alt=""
              className={styles.prod_img}
            />
          </div>
          <div className={styles.prod_spec}>
            <h3 className={styles.prod_title}>{product.name}</h3>
            <h3 className={styles.prod_cat}>{category.title}</h3>
            <h3 className={styles.prod_price}>
              {product.defaultProductVariant.price}.00 AED
            </h3>
            <p className={styles.prod_desc}>
              All our bouquets are made of carefully selected, freshly cut
              blooms. They are hand- crafted by experienced florists and
              beautifully packaged with the utmost attention to detail. A
              personal, handwritten greeting card will be added on request.
            </p>
            <div className="option_container">
              <h3 className={styles.option_label}>Options</h3>
              <div className={styles.option_btns}>
                <button
                  className={
                    variant == 'glow'
                      ? styles.option_btn_active
                      : styles.option_btn
                  }
                  onClick={glowVar}
                >
                  Glowing
                </button>
                <button
                  className={
                    variant == 'unGlow'
                      ? styles.option_btn_active
                      : styles.option_btn
                  }
                  onClick={unglowVar}
                >
                  Non Glowing
                </button>
              </div>
              <div className="qty_container">
                <h3 className={styles.qty_label}>Quantity</h3>
                <p className={styles.quantity_desc}>
                  <span className={styles.minus} onClick={decQty}>
                    <AiOutlineMinus />
                  </span>
                  <span className={styles.num}>{qty}</span>
                  <span className={styles.plus} onClick={incQty}>
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
              <button
                className={styles.addtocart}
                onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.product_details}>
          <div>
            <img
              src={urlFor(product.variants[0].images[0])}
              alt=""
              className={styles.prod_img}
            />
          </div>
          <div className={styles.prod_spec}>
            <h3 className={styles.prod_title}>{product.variants[0].title}</h3>
            <h3 className={styles.prod_cat}>{category.title}</h3>
            <h3 className={styles.prod_price}>
              {product.variants[0].price}.00 AED
            </h3>
            <p className={styles.prod_desc}>
              All our bouquets are made of carefully selected, freshly cut
              blooms. They are hand- crafted by experienced florists and
              beautifully packaged with the utmost attention to detail. A
              personal, handwritten greeting card will be added on request.
            </p>
            <div className="option_container">
              <h3 className={styles.option_label}>Options</h3>
              <div className={styles.option_btns}>
                <button
                  className={
                    variant == 'glow'
                      ? styles.option_btn_active
                      : styles.option_btn
                  }
                  onClick={glowVar}
                >
                  Glowing
                </button>
                <button
                  className={
                    variant == 'unGlow'
                      ? styles.option_btn_active
                      : styles.option_btn
                  }
                  onClick={unglowVar}
                >
                  Non Glowing
                </button>
              </div>
              <div className="qty_container">
                <h3 className={styles.qty_label}>Quantity</h3>
                <p className={styles.quantity_desc}>
                  <span className={styles.minus} onClick={decQty}>
                    <AiOutlineMinus />
                  </span>
                  <span className={styles.num}>{qty}</span>
                  <span className={styles.plus} onClick={incQty}>
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
              <button
                className={styles.addtocart}
                onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.rel_prod_section}>
        <h2 style={{ fontWeight: 300 }}>You may also like</h2>
        <div className="marquee">
          <div className={styles.rel_prod_container}>
            {shuffleProducts(products)
              .filter((item, index) => index < 4)
              .map((item) => (
                <div key={item.index}>
                  <Link href={`/product/${item.slug.current}`}>
                    <div className={styles.product_card}>
                      <img
                        src={urlFor(item.defaultProductVariant.images[0])}
                        width={250}
                        height={300}
                        className="product-image"
                      />
                      <p className="product-name">{item.name}</p>
                      <p className="product-price">
                        {item.defaultProductVariant.price}.00 AED
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);
  const productsQuery = `*[_type == "product" && _id != '${product._id}']`;
  const products = await client.fetch(productsQuery);
  const catQuery = `*[_type == "category" && _id == '${product.categories[0]._ref}'][0]`;
  const category = await client.fetch(catQuery);

  return {
    props: { product, products, category },
  };
};

export default ProductDetails;
