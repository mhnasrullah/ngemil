import React,{useState} from 'react'
import {Pagination} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

import Bintikdark from '../../asset/Bintikdark.svg'
import Bintiklight from '../../asset/Bintiklight.svg'
import Bgmenu from '../../asset/menu/Bgmenu.jpg'
import Heading from '../../component/Heading'
import Produk from './Produk'

// Biskuit
import Biscoco from '../../asset/menu/Biscoco.png'
import Bisguar from '../../asset/menu/Bisguar.png'
import Bispel from '../../asset/menu/Bispel.png'
import Biskur from '../../asset/menu/Biskur.png'
// Roti
import Rogaker from '../../asset/menu/Rogaker.png'
import Rogal from '../../asset/menu/Rogal.png'
import Rokopi from '../../asset/menu/Rokopi.png'
import Ropangsi from '../../asset/menu/Ropangsi.png'
// Kue
import Kupel from '../../asset/menu/Kupel.png'
import Kujelku from '../../asset/menu/Kujelku.png'
import Kusanmer from '../../asset/menu/Kusanmer.png'
import Kukoco from '../../asset/menu/Kukoco.png'

function biskuit(){
    return (
        <>
        <SwiperSlide>
            <Produk
            img={Biscoco}
            name="Biscoco"
            kal="45"/>
        </SwiperSlide>
        <SwiperSlide>
            <Produk
            img={Bisguar}
            name="Bisguar"
            kal="50"/>
        </SwiperSlide>
        <SwiperSlide>
            <Produk
            img={Bispel}
            name="Bispel"
            kal="35"/>
        </SwiperSlide>
        <SwiperSlide>
            <Produk
            img={Biskur}
            name="Biskur"
            kal="60"/>
        </SwiperSlide>
        </>
    )
}

function roti(){
    return (
        <>
        <SwiperSlide>
            <Produk
            img={Rokopi}
            name="Rokopi"
            kal="50"/>
        </SwiperSlide>
        <SwiperSlide>
            <Produk
            img={Rogal}
            name="Rogal"
            kal="45"/>
        </SwiperSlide>
        <SwiperSlide>
            <Produk
            img={Rogaker}
            name="Rogaker"
            kal="55"/>
        </SwiperSlide>
        <SwiperSlide>
            <Produk
            img={Ropangsi}
            name="Ropangsi"
            kal="60"/>
        </SwiperSlide>
        </>
    )
}

function kue(){
    return (
        <>
        <SwiperSlide>
            <Produk
            img={Kupel}
            name="Kupel"
            kal="35"/>
        </SwiperSlide>
        <SwiperSlide>
            <Produk
            img={Kujelku}
            name="Kujelku"
            kal="45"/>
        </SwiperSlide>
        <SwiperSlide>
            <Produk
            img={Kukoco}
            name="Rogaker"
            kal="50"/>
        </SwiperSlide>
        <SwiperSlide>
            <Produk
            img={Kusanmer}
            name="Kusanmer"
            kal="40"/>
        </SwiperSlide>
        </>
    )
}

function renderProduk(produk){
    switch (produk) {
        case "biskuit" :
            return biskuit();
        case "roti" :
            return roti();
        case "kue" :
            return kue();
    }
}

export default function Menu(props) {

    const [produk,setProduk] = useState("biskuit");

    let activeProduk = "w-1/3 transition-all font-bold";
    let nonactiveProduk = "w-1/3 transition-all opacity-80";

    let slideNav; 
    if(produk == "kue"){
        slideNav = "linear-gradient(to right, #F95C4F 33%,rgba(22, 34, 44, .5) 33% 66%,rgba(22, 34, 44, .5) 66%)"
    }else if(produk == "biskuit"){
        slideNav = "linear-gradient(to right, rgba(22, 34, 44, .5) 33%,#F95C4F 33% 66%,rgba(22, 34, 44, .5) 66%)"
    }else{
        slideNav = "linear-gradient(to right, rgba(22, 34, 44, .5) 33%,rgba(22, 34, 44, .5) 33% 66%,#F95C4F 66%)"
    }

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
            <div className='bg-whitec dark:bg-blackc black:text-white px-5 py-8 md:w-9/12 lg:w-8/12 lg:py-10 mx-auto text-center rounded-lg drop-shadow-allc mb-15'>
                <Heading>Menu Ngemil<span className='text-redc'>!</span> Terbaik</Heading>
                <p className='text-center opacity-80 mt-3 text-blackc md:w-7/12 lg:w-5/12 mx-auto dark:text-whitec'>Rasakan camilan enak dan bergizi tinggi tanpa ganggu diet harianmu</p>
            </div>
            <div className='w-10/12 md:w-6/12 lg:w-4/12 mx-auto mt-11 text-center mb-8 text-xl font-medium text-bluec dark:text-whitec'>
                <button className={produk == "kue" ? activeProduk : nonactiveProduk} onClick={()=>{setProduk("kue")}}>Kue</button>
                <button className={produk == "biskuit" ? activeProduk : nonactiveProduk} onClick={()=>{setProduk("biskuit")}}>Biskuit</button>
                <button className={produk == "roti" ? activeProduk : nonactiveProduk} onClick={()=>{setProduk("roti")}}>Roti</button>
                <div
                style={{
                    height: "2px",
                    backgroundImage : slideNav
                }}
                className='w-full rounded-full mt-2 transition-all'></div>
            </div>

            <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            pagination
            className="pt-8 pb-16"
            breakpoints={{
                767:{
                    slidesPerView : 2
                },
                968:{
                    slidesPerView : 4
                },
            }}
            >
            {renderProduk(produk)}
            </Swiper>
        </div>
    </section>
  )
}
