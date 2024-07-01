import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';


export default function Slider() {
  return (
    <div className='main-sidebar'>
      <Swiper
        slidesPerView={3}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slider">
                <div className="slider-img">
                  < AudiotrackIcon className='slideimg'/>
                </div>
                <div className="slider-content">
                    <div className="s-heading">
                        <h4> Music Class</h4>
                    </div>
                    <div className="s-des">
                  <p> Indoor and out door activities that cater to all domains development.</p>   
                 
                    </div>
                    <div className="s-btn">
                        <NavLink> View More </NavLink> 
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider">
                <div className="slider-img">
                  < AudiotrackIcon className='slideimg'/>
                </div>
                <div className="slider-content">
                    <div className="s-heading">
                        <h4> Music Class</h4>
                    </div>
                    <div className="s-des">
                  <p> Indoor and out door activities that cater to all domains development.</p>   
                 
                    </div>
                    <div className="s-btn">
                        <NavLink> View More </NavLink> 
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider">
                <div className="slider-img">
                  < AudiotrackIcon className='slideimg'/>
                </div>
                <div className="slider-content">
                    <div className="s-heading">
                        <h4> Music Class</h4>
                    </div>
                    <div className="s-des">
                  <p> Indoor and out door activities that cater to all domains development.</p>   
                 
                    </div>
                    <div className="s-btn">
                        <NavLink> View More </NavLink> 
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider">
                <div className="slider-img">
                  < AudiotrackIcon className='slideimg'/>
                </div>
                <div className="slider-content">
                    <div className="s-heading">
                        <h4> Music Class</h4>
                    </div>
                    <div className="s-des">
                  <p> Indoor and out door activities that cater to all domains development.</p>   
                 
                    </div>
                    <div className="s-btn">
                        <NavLink> View More </NavLink> 
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider">
                <div className="slider-img">
                  < AudiotrackIcon className='slideimg'/>
                </div>
                <div className="slider-content">
                    <div className="s-heading">
                        <h4> Music Class</h4>
                    </div>
                    <div className="s-des">
                  <p> Indoor and out door activities that cater to all domains development.</p>   
                 
                    </div>
                    <div className="s-btn">
                        <NavLink> View More </NavLink> 
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

