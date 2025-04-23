import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className={styles.cardLink}>
      <article className={styles.card}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.price}>{product.price}</p>
      </article>
    </Link>
  );
};

export default ProductCard;