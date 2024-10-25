import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Button from '../Button/Button';
import styles from './Navbar.module.css';

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <Logo />
      </Link>
      <div className={styles.searchContainer}>
        <Search
          placeholder="Search an album of your choice"
          searchData={searchData}
        />
      </div>
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
