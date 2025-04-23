import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = ({ active }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Nike Collection</h1>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={`${styles.link} ${active === 'Home' ? styles.active : ''}`}
        >
          Home
        </Link>
      </nav>
    </header>
  );
};

export default Header;
