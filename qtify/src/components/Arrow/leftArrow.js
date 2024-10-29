import React from 'react';
import leftArrow from '../../assests/leftArrow.svg';

const LeftArrow = ({ onClick }) => (
  <img src={leftArrow} alt="Left Arrow" onClick={onClick} style={{ cursor: 'pointer' }} />
);

export default LeftArrow;
