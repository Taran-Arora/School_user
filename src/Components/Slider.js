
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import itsbgimg from '../assets/Images/bg-shape.jpg';

export default function Slider() {
  return (
    <div className='main-sidebar'>
      <Swiper
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          840: {
            slidesPerView: 1,
            
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,

          },
          1500: {
            slidesPerView: 4,
       
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider bg-slider">
            <div className="slider-img-main">
              <div className="slider-img">
                <AudiotrackIcon className='slideimg' />
              </div>
            </div>
            <div className="slider-content">
              <div className="s-heading">
                <h4> Music Class</h4>
              </div>
              <div className="s-des">
                <p> Indoor and out door activities that cater to all domains development.</p>
              </div>
              <div className="s-btn">
                <NavLink className="s-view-more"> View More </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider bg-slider">
            <div className="slider-img-main">
              <div className="slider-img">
                <AudiotrackIcon className='slideimg' />
              </div>
            </div>
            <div className="slider-content">
              <div className="s-heading">
                <h4> Music Class</h4>
              </div>
              <div className="s-des">
                <p> Indoor and out door activities that cater to all domains development.</p>
              </div>
              <div className="s-btn">
                <NavLink className="s-view-more"> View More </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider bg-slider">
            <div className="slider-img-main">
              <div className="slider-img">
                <AudiotrackIcon className='slideimg' />
              </div>
            </div>
            <div className="slider-content">
              <div className="s-heading">
                <h4> Music Class</h4>
              </div>
              <div className="s-des">
                <p> Indoor and out door activities that cater to all domains development.</p>
              </div>
              <div className="s-btn">
                <NavLink className="s-view-more"> View More </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider bg-slider">
            <div className="slider-img-main">
              <div className="slider-img">
                <AudiotrackIcon className='slideimg' />
              </div>
            </div>
            <div className="slider-content">
              <div className="s-heading">
                <h4> Music Class</h4>
              </div>
              <div className="s-des">
                <p> Indoor and out door activities that cater to all domains development.</p>
              </div>
              <div className="s-btn">
                <NavLink className="s-view-more"> View More </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider bg-slider">
            <div className="slider-img-main">
              <div className="slider-img">
                <AudiotrackIcon className='slideimg' />
              </div>
            </div>
            <div className="slider-content">
              <div className="s-heading">
                <h4> Music Class</h4>
              </div>
              <div className="s-des">
                <p> Indoor and out door activities that cater to all domains development.</p>
              </div>
              <div className="s-btn">
                <NavLink className="s-view-more"> View More </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider bg-slider">
            <div className="slider-img-main">
              <div className="slider-img">
                <AudiotrackIcon className='slideimg' />
              </div>
            </div>
            <div className="slider-content">
              <div className="s-heading">
                <h4> Music Class</h4>
              </div>
              <div className="s-des">
                <p> Indoor and out door activities that cater to all domains development.</p>
              </div>
              <div className="s-btn">
                <NavLink className="s-view-more"> View More </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider bg-slider">
            <div className="slider-img-main">
              <div className="slider-img">
                <AudiotrackIcon className='slideimg' />
              </div>
            </div>
            <div className="slider-content">
              <div className="s-heading">
                <h4> Music Class</h4>
              </div>
              <div className="s-des">
                <p> Indoor and out door activities that cater to all domains development.</p>
              </div>
              <div className="s-btn">
                <NavLink className="s-view-more"> View More </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider bg-slider">
            <div className="slider-img-main">
              <div className="slider-img">
                <AudiotrackIcon className='slideimg' />
              </div>
            </div>
            <div className="slider-content">
              <div className="s-heading">
                <h4> Music Class</h4>
              </div>
              <div className="s-des">
                <p> Indoor and out door activities that cater to all domains development.</p>
              </div>
              <div className="s-btn">
                <NavLink className="s-view-more"> View More </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Repeat SwiperSlide as needed */}
      </Swiper>
    </div>
  );
}
