import React from 'react'
import Tw from '../../asset/icon/Tw.svg'
import Ig from '../../asset/icon/Ig.svg'
import Fb from '../../asset/icon/Fb.svg'

export default function Footer() {
  return (
    
    <footer className='py-10 dark:bg-blackc dark:text-whitec'>
        <p className='text-center font-medium'>Follow us on</p>
        <div className='flex gap-5 justify-center mt-3'>
            <a href='#'>
                <img src={Ig}/>
            </a>
            <a href='#'>
                <img src={Fb}/>
            </a>
            <a href='#'>
                <img src={Tw}/>
            </a>
        </div>
        <p  className='text-center font-medium opacity-50 mt-8'>Exploration</p>
        <p className='text-center font-medium'>Muhammad Hasan Nasrullah</p>
    </footer>
  )
}
