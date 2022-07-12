import React from 'react'
import Heading from '../../component/Heading'
import Subheading from '../../component/Subheading'
import {Pagination} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import Cardtesti from './Cardtesti'

import Roni from "../../asset/testi/Roni.png"
import Bispel from "../../asset/menu/Bispel.png"
import Yuli from "../../asset/testi/Yuli.jpg"
import Bisguar from "../../asset/menu/Bisguar.png"

export default function Testi() {
  return (
    <section className='py-24 dark:bg-blackc'>
        <div className='container lg:flex lg:items-center mx-auto'>
          <div className='lg:w-1/6'>
            <Heading className="text-right w-1/2 ml-auto lg:w-10/12">Ngemil<span className='text-redc'>!</span> Itu Enak</Heading>
            <Subheading className="text-right ml-auto w-3/4 lg:w-full">Masih takut Ngemil! baca dulu yang udah mereka rasain</Subheading>
          </div>
        
        <div className='h-fit w-1/12 hidden lg:block'>
          <svg width="29" className='mx-auto animate-slideright' height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9617 11.91L3.80797 0.659223C2.93658 -0.219741 1.52493 -0.219741 0.653542 0.659223C-0.217847 1.53819 -0.217847 2.96211 0.653542 3.84107L10.2353 13.4991L0.657027 23.1607C-0.214361 24.0396 -0.214361 25.4636 0.657027 26.3425C1.09133 26.782 1.66156 27 2.2325 27C2.80343 27 3.37437 26.7803 3.80936 26.3408L14.9631 15.09C15.8331 14.2093 15.8331 12.7889 14.9617 11.91ZM28.3463 11.91L17.1925 0.659223C16.3211 -0.219741 14.9095 -0.219741 14.0381 0.659223C13.1667 1.53819 13.1667 2.96211 14.0381 3.84107L23.6199 13.4991L14.0416 23.1607C13.1702 24.0396 13.1702 25.4636 14.0416 26.3425C14.4738 26.782 15.0454 27 15.617 27C16.1887 27 16.7589 26.7803 17.1939 26.3408L28.3477 15.09C29.2177 14.2093 29.2177 12.7889 28.3463 11.91Z" fill="#F95C4F"/>
          </svg>
        </div>
        

        <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        pagination
        spaceBetween={10  }
        className="pt-8 lg:pt-4 lg:pb-4 pb-16 lg:w-3/4"
        breakpoints={{
            767:{
                slidesPerView : 2
            }
        }}>
          <SwiperSlide>
            <Cardtesti
            name = "Roni Irawan"
            on = "Bispel"
            photo = {Roni}
            produk = {Bispel}
            >Rasanya wah harganya murah. Ini bakal jadi cemilan tiap hari saya</Cardtesti>
          </SwiperSlide>
          <SwiperSlide>
            <Cardtesti
            name = "Yuli Novianti"
            on = "Bisguar"
            photo = {Yuli}
            produk = {Bisguar}
            >Baru kali ini ngemil manis tanpa takut gemuk. Bisguar rasanya enak banget</Cardtesti>
          </SwiperSlide>
        </Swiper>
        </div>
    </section>
  )
}
