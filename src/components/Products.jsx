import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
// import required modules
import { Navigation } from 'swiper/modules';

import Card from './Card';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';

export default function Products() {
    const data=[
        {
            name:'محصول ۱',
            offer:true,
            src:img1,
            price:'۱۰۰۰'
        },
        {
            name:'محصول ۲',
            offer:true,
            src:img2,
            price:'۱۰۰۰'
        },
        {
            name:'محصول ۳',
            offer:true,
            src:img3,
            price:'۱۰۰۰'
        },
        {
            name:'محصول ۴',
            offer:true,
            src:img4,
            price:'۱۰۰۰'
        },
        {
            name:'محصول ۵',
            offer:true,
            src:img3,
            price:'۱۰۰۰'
        },
        {
            name:'محصول ۶',
            offer:true,
            src:img4,
            price:'۱۰۰۰'
        },
        
    ]
    const swiperRef = useRef();
  return (
    <div className='mb-5'>
    <div className="d-flex justify-content-between marginc my-2 p-1 align-items-center">
        <div className="col-4 seeMore fs-6 fw-bold cursor-pointer" style={{color:'#7F7F7F'}}>مشاهده همه</div>
        <div className="col-8 text-end offerTitle fs-md-4 fw-bold text-white">محبوب ترین محصولات</div>
    </div>
    <div className="position-relative marginc">
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            // navigation={true}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
            }}
            className="mySwiper mx-2 "
            breakpoints= {{
                0: {
                  slidesPerView: 1.4,
                  spaceBetween: 10
                },
                480: {
                  slidesPerView: 2.2,
                  spaceBetween: 30
                },
                680: {
                  slidesPerView: 3.4,
                  spaceBetween: 30
                },
                1240: {
                  slidesPerView: 4.1,
                  spaceBetween: 40
                }
              }}
        >
            <div className="marginc">
            {data.map(item=>(
                <SwiperSlide>
                    <Card item={item} />
                </SwiperSlide>
            ))}
            </div> 
        </Swiper>
    </div>
      
        <p className="cursor-pointer rounded text-white p-1 prev" style={{backgroundColor:'#272A31'}} onClick={() => swiperRef.current?.slidePrev()}>
            <CaretLeftFill className='fsmicon align-self-center p-1 ' />
        </p>
        <p className="cursor-pointer rounded text-white p-1 next" style={{backgroundColor:'#272A31'}} onClick={() => swiperRef.current?.slideNext()}>
            <CaretRightFill className='fsmicon align-self-center p-1 ' />
        </p>
    </div>
  );
}
