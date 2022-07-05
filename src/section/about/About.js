import React from 'react'
import Heading from '../../component/Heading'

import Kue from "../../asset/icon/Kue.svg"
import Biskuit from "../../asset/icon/Biskuit.svg"
import Roti from "../../asset/icon/Roti.svg"

export default function About() {
  return (
    <section id='about' className='dark:bg-blackc py-36'>
        <div className='container'>
            <Heading className="md:text-center">Selamat Datang Ngemilers<span className='text-redc'>'</span></Heading>
            <p className='mt-10 text-blackc dark:text-whitec md:text-center md:w-4/6 lg:w-4/12 mx-auto'><span className='text-redc font-medium'>Ngemil’</span> dihadirkan khusus untuk membantu pelaku diet agar dapat merasakan enaknya ngemil! tanpa merusak program diet</p>

            <div className='grid grid-cols-3 mt-14 md:w-4/6 lg:w-1/2 mx-auto'>
                <div className='mx-auto'>
                    <img className='h-12 lg:h-14 mx-auto' src={Kue}/>
                    <p className='text-center text-bluec dark:text-whitec font-medium mt-2'>Kue</p>
                </div>
                <div className='mx-auto'>
                    <img className='h-12 lg:h-14 mx-auto' src={Biskuit}/>
                    <p className='text-center text-bluec dark:text-whitec font-medium mt-2'>Biskuit</p>
                </div>
                <div className='mx-auto'>
                    <img className='h-12 lg:h-14 mx-auto' src={Roti}/>
                    <p className='text-center text-bluec dark:text-whitec font-medium mt-2'>Roti</p>
                </div>
            </div>

        </div>
    </section>
  )
}
