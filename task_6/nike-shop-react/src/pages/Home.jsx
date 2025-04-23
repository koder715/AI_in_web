import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import styles from '../styles/App.module.css';

const products = [
  {
    id: 'air_max',
    name: 'Nike Air Max',
    price: '$180',
    image: '/assets/shoe1.png'
  },
  {
    id: 'revolution',
    name: 'Nike Revolution',
    price: '$120',
    image: '/assets/shoe2.png'
  }
];

const Home = () => {
  return (
    <>
      <Header active="Home" />
      <main className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </>
  );
};

export default Home;