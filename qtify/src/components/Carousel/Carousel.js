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
      {/* Initialize Swiper with custom navigation */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={'auto'}
        onBeforeInit={(swiper) => {
          // Assign the refs to Swiper’s navigation
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={(swiper) => {
          // Update Swiper navigation to ensure the custom buttons are clickable
          swiper.navigation.init();
          swiper.navigation.update();
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

      {/* Custom Navigation Buttons */}
      <div ref={prevRef} className="custom-nav-left">
        <LeftArrow onClick={() => prevRef.current?.click()} />
      </div>
      <div ref={nextRef} className="custom-nav-right">
        <RightArrow onClick={() => nextRef.current?.click()} />
      </div>
    </div>
  );
}

export default Carousel;
