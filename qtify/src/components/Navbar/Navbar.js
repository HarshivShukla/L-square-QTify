import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Button from '../Button/Button';
import styles from './Navbar.module.css';

function Navbar({ searchData = [] }) { // Ensure searchData is an array by default
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <Logo />
      </Link>
      <div className={styles.searchContainer}>
        <Search
          placeholder="Search an album of your choice"
          searchData={Array.isArray(searchData) ? searchData : []} // Ensure array is passed
        />
      </div>
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
