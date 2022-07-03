import React from 'react'
import Bintikdark from '../../asset/Bintikdark.svg'
import Bintiklight from '../../asset/Bintiklight.svg'
import Bghead from '../../asset/header/Bghead.png'
import Hero from '../../asset/header/Hero.png'

export default function Header(props) {
  return (
    <header className='pt-40 dark:bg-blackc'>
        <div className='container'>
            <h1 className='text-center font-extrabold text-5xl text-bluec dark:text-whitec lg:text-6xl'>Camilan Enak Pro Diet<span className='text-redc'>’</span></h1>
            <p className='text-center opacity-80 mt-3 text-blackc md:w-7/12 lg:w-5/12 mx-auto dark:text-whitec'>Rasakan camilan enak dan bergizi tinggi tanpa ganggu diet harianmu</p>
            <a href='#' className='px-8 py-2 rounded-lg mx-auto mt-10 md:mt-8 w-fit block bg-redc text-whitec'>Ngemil!</a>
        </div>
        <div className='mt-20 relative w-full py-10'>
          <div>
            <img src={props.dark ? Bintiklight : Bintikdark} className="w-full opacity-20 dark:opacity-5 h-20 object-cover object-center lg:h-32 dark:fill-white"/>
            <img src={Bghead} className="w-full h-96 md:h-80 "/>
            <img src={props.dark ? Bintiklight : Bintikdark} className="w-full opacity-20 dark:opacity-5 h-20 object-cover object-center lg:h-32"/>
          </div>
          <div className='w-full h-full overflow-hidden absolute top-0 py-10 flex justify-center'>

          <img
          src={Hero}
          style={{
            transform : `rotate(${props.scroll/15}deg)`
          }}
          className="drop-shadow-head min-w-fit h-full w-fit object-center rounded-full object-cover"/>
          </div>
        </div>
    </header>
  )
}
