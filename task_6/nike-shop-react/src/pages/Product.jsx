import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Modal from '../components/Modal';
import styles from '../styles/Product.module.css';

const productData = {
  air_max: {
    name: 'Nike Air Max',
    description:
      'The Nike Air Max offers unparalleled comfort with iconic design and cushioning technology. Perfect for streetwear enthusiasts and athletes alike.',
    price: '$180',
    image: '/assets/shoe1.png'
  },
  revolution: {
    name: 'Nike Revolution',
    description:
      'The Nike Revolution is a lightweight running shoe built for durability and comfort. Great for athletes and casual runners.',
    price: '$120',
    image: '/assets/shoe2.png'
  }
};

const Product = () => {
  const { id } = useParams();
  const product = productData[id];
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <section className={styles.detail}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.image}
        />
        <div className={styles.info}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className={styles.price}>{product.price}</div>
          <button className={styles.button} onClick={() => setShowModal(true)}>
            Buy Now
          </button>
        </div>
      </section>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Product;