import React from 'react'
import Bintikdark from '../../asset/Bintikdark.svg'
import Bintiklight from '../../asset/Bintiklight.svg'
import Bg from '../../asset/app/Appbg.jpg'
import Appdark from '../../asset/app/Appdark.png'
import Applight from '../../asset/app/Applight.png'
import Heading from "../../component/Heading"
import Appstore from "../../asset/app/Appstore.svg"
import Playstore from "../../asset/app/Playstore.svg"
import Appstored from "../../asset/app/Appstored.svg"
import Playstored from "../../asset/app/Playstored.svg"

export default function Apc(props) {
  return (
    <section className='dark:bg-blackc md:relative'>
      <div>
        <img src={props.dark ? Bintiklight : Bintikdark} className="w-full opacity-20 dark:opacity-5 h-20 object-cover object-center lg:h-32"/>
        <div
        style={{
          background : `url(${Bg})`
        }}
        className='h-500 w-full bg-cover bg-center bg-fixed md:h-80 lg:h-96'></div>
        <img src={props.dark ? Bintiklight : Bintikdark} className="w-full opacity-20 dark:opacity-5 h-20 object-cover object-center lg:h-32"/>
      </div>

      <div className='container mx-auto relative md:flex lg:justify-center md:h-full md:absolute md:top-0 md:right-0 md:items-center'>
        <img
        src={props.dark ? Appdark : Applight}
        className="rounded-xl shadow-lg -mt-500 w-1/2 mx-auto relative md:w-3/12 lg:w-1/6 md:m-0 md:-mr-10 lg:-mr-12" />
        <div className='bg-whitec dark:bg-blackc rounded-lg -mt-20 md:mb-0 lg:px-28 lg:py-11 lg:w-1/2  md:pl-16 pt-32 md:pb-5 md:pt-5 md:mt-0 pb-10 px-5 shadow-lg'>
          <Heading>Pengen Ngemil<span className='text-redc'>!</span> Jadi Lebih Gampang</Heading>
          <p className='mt-5 dark:text-whitec'>Mau pengen ngemil? bisa pesan melalui aplikasi mobile yang telah kami sediakan di playstore dan appstore</p>
          <div className='flex gap-5 mt-10'>
            <img src={props.dark ? Appstored : Appstore}/>
            <img src={props.dark ? Playstored : Playstore}/>
          </div>
        </div>
      </div>
    </section>
  )
}
