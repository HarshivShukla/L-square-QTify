import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Carousel.css';
import LeftArrow from '../Arrow/leftArrow';
import RightArrow from '../Arrow/rightArrow';

function Carousel({ items, renderItem }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={'auto'}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={prevRef} className="custom-nav-left">
        <LeftArrow />
      </div>
      <div ref={nextRef} className="custom-nav-right">
        <RightArrow />
      </div>
    </div>
  );
}

export default Carousel;
