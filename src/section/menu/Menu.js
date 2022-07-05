import React from 'react'
import {Pagination} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

import Bintikdark from '../../asset/Bintikdark.svg'
import Bintiklight from '../../asset/Bintiklight.svg'
import Bgmenu from '../../asset/menu/Bgmenu.jpg'
import Heading from '../../component/Heading'
import Produk from './Produk'

import Biscoco from '../../asset/menu/Biscoco.png'

export default function Menu(props) {
  return (
    <section id='menu' className='dark:bg-blackc'>
        <div className='w-full'>
            <img src={props.dark ? Bintiklight : Bintikdark} className="w-full opacity-20 dark:opacity-5 h-20 object-cover object-center lg:h-32"/>
            <div
            className='w-full h-72 bg-fixed bg-cover bg-center'
            style={{
                backgroundImage : `url(${Bgmenu})`
            }}></div>
            <img src={props.dark ? Bintiklight : Bintikdark} className="w-full opacity-20 dark:opacity-5 h-20 object-cover object-center lg:h-32"/>
        </div>
        <div className='container -mt-44 relative'>
            <div className='bg-whitec px-5 py-8 md:w-9/12 mx-auto text-center rounded-lg drop-shadow-allc mb-15'>
                <Heading>Menu Ngemil<span className='text-redc'>!</span> Terbaik</Heading>
                <p className='text-center opacity-80 mt-3 text-blackc md:w-7/12 lg:w-5/12 mx-auto dark:text-whitec'>Rasakan camilan enak dan bergizi tinggi tanpa ganggu diet harianmu</p>
            </div>
            <div className='w-10/12 md:w-7/12 mx-auto mt-11 text-center mb-8 text-xl font-medium text-bluec'>
                <button className='w-1/3 opacity-80'>Kue</button>
                <button className='w-1/3 font-bold'>Biskuit</button>
                <button className='w-1/3 opacity-80'>Roti</button>
                <div
                style={{
                    height: "2px",
                    backgroundImage : "linear-gradient(to right, rgba(22, 34, 44, .5) 33%,#F95C4F 33% 66%,rgba(22, 34, 44, .5) 66%)"
                }}
                className='w-full rounded-full mt-2'></div>
            </div>

            <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            pagination
            className="pt-4 pb-16"
            breakpoints={{
                767:{
                    slidesPerView : 2
                },
                968:{
                    slidesPerView : 4
                },
            }}
            >
                <SwiperSlide>
                    <Produk
                    img={Biscoco}
                    name="Biscoco"
                    kal="45"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Produk
                    img={Biscoco}
                    name="Biscoco"
                    kal="45"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Produk
                    img={Biscoco}
                    name="Biscoco"
                    kal="45"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Produk
                    img={Biscoco}
                    name="Biscoco"
                    kal="45"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}
