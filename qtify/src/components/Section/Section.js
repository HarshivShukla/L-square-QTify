import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel'; // Import the Carousel component
import styles from './Section.module.css';
import { Button, Typography } from '@mui/material';

function Section({ title, apiEndpoint }) {
  const [albums, setAlbums] = useState([]);
  const [isCarousel, setIsCarousel] = useState(true); // Default to carousel view

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, [apiEndpoint]);

  const toggleView = () => {
    setIsCarousel(!isCarousel);
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <Typography variant="h5" className={styles.title}>{title}</Typography>
        <Button onClick={toggleView} className={styles.toggleButton}>
          {isCarousel ? 'Show All' : 'Collapse'}
        </Button>
      </div>
      {isCarousel ? (
        <Carousel
          items={albums}
          renderItem={(album) => (
            <Card
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          )}
        />
      ) : (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
