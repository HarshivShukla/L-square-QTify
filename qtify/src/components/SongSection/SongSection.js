import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tabs, Tab, Typography } from '@mui/material';
import Section from '../Section/Section';
import styles from './SongsSection.module.css';

function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/songs');
        setSongs(response.data); // Set all songs initially
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    const fetchGenres = async () => {
      if (genres.length > 1) return; // Prevent re-fetching
      try {
        const genreResponse = await axios.get('https://qtify-backend-labs.crio.do/genres');
        const genreData = genreResponse.data.data;
        if (Array.isArray(genreData)) {
          setGenres([{ key: "all", label: "All" }, ...genreData]);
        } else {
          console.error("Unexpected genre response format:", genreResponse.data);
        }
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchSongs();
    fetchGenres();
  }, [genres.length]);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue); // Set selected genre key
  };

  // Filter songs based on the selected genre key
  const filteredSongs = selectedGenre === "all"
    ? songs
    : songs.filter(song => song.genre.key === selectedGenre);

  return (
    <div className={styles.songsSection}>
      <Typography variant="h5" className={styles.sectionTitle}>
        Songs
      </Typography>

      {/* Genre Tabs */}
      <Tabs
        value={selectedGenre}
        onChange={handleTabChange}
        aria-label="genre tabs"
        variant="scrollable"
        scrollButtons="auto"
        className={styles.genreTabs}
        TabIndicatorProps={{ style: { backgroundColor: 'var(--color-primary)' } }}
      >
        {genres.map((genre) => (
          <Tab 
            key={genre.key} 
            label={genre.label} 
            value={genre.key} 
            className={styles.genreTab} 
          />
        ))}
      </Tabs>

      {/* Display Filtered Songs */}
      <Section
        title=""
        apiData={filteredSongs} // Pass filtered songs based on selected genre
        isSongSection={true} // Indicates this is the Songs section for custom rendering
      />
    </div>
  );
}

export default SongsSection;
