import React from 'react';
import { Card as MuiCard, CardMedia, CardContent, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import styles from './Card.module.css';

function Card({ image, title, follows, likes, isSongSection }) {
  return (
    <MuiCard className={styles.card}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className={styles.cardMedia}
      />
      <CardContent className={styles.cardContent}>
        <div className={styles.chipContainer}>
          <Chip 
            label={`${isSongSection ? likes : follows} ${isSongSection ? 'Likes' : 'Follows'}`} 
            className={styles.chip} 
          />
        </div>
        <Typography variant="h6" className={styles.albumTitle}>
          {title}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}

export default Card;
