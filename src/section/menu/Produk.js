import React from 'react'
import Latar from '../../asset/menu/latar.svg'
import "./produk.css"

export default function Produk(props) {
  return (
    <div className='text-center group'>
      <div className='w-3/5 mx-auto'>
        <img src={props.img} className="w-5/6 mx-auto -mb-8 relative group-hover:animate-custom"/>
        <img src={Latar}  className="w-full"/>
      </div>
      <h6 className='font-semibold dark:font-medium text-xl text-bluec mt-3 dark:text-whitec'>{props.name}<span className='text-redc'>'</span></h6>
      <p className='text-redc font-medium'>{props.kal}kkal</p>
    </div>
  )
}
