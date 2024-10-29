import React from 'react';
import rightArrow from '../../assests/rightArrow.svg';

const RightArrow = ({ onClick }) => (
  <img src={rightArrow} alt="Right Arrow" onClick={onClick} style={{ cursor: 'pointer' }} />
);

export default RightArrow;
