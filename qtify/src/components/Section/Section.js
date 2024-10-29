import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import styles from './Section.module.css';
import { Button, Typography } from '@mui/material';

function Section({ title, apiEndpoint, apiData = null, isSongSection = false }) {
  const [data, setData] = useState([]);
  const [isCarousel, setIsCarousel] = useState(true); 

  useEffect(() => {
    // Set data directly if apiData is passed (for songs)
    if (apiData) {
      setData(apiData);
      return;
    }
    // Otherwise, fetch data if apiEndpoint is provided
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching data from ${apiEndpoint}:`, error);
      }
    };

    if (apiEndpoint) fetchData();
  }, [apiEndpoint, apiData]);

  const displayData = apiData || data;

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <Typography variant="h5" className={styles.title}>{title}</Typography>
        {!isSongSection && (
          <Button onClick={() => setIsCarousel(!isCarousel)} className={styles.toggleButton}>
            {isCarousel ? 'Show All' : 'Collapse'}
          </Button>
        )}
      </div>

      {/* Carousel or Grid View */}
      {isCarousel || isSongSection ? (
        <Carousel
          items={displayData}
          renderItem={(item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={!isSongSection ? item.follows : null}
              likes={isSongSection ? item.likes : null}
              isSongSection={isSongSection}
            />
          )}
        />
      ) : (
        <div className={styles.grid}>
          {displayData.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={!isSongSection ? item.follows : null}
              likes={isSongSection ? item.likes : null}
              isSongSection={isSongSection}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
