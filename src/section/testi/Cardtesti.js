import React from 'react'

export default function Cardtesti(props) {
  return (
    <div className='py-10 px-5 shadow-md w-3/4 md:w-full mx-auto rounded-lg md:flex gap-5'>
        <div className='mx-center relative w-fit md:h-fit mx-auto md:w-1/4'>
            <img src={props.photo} className="w-24 h-24 md:w-16 md:h-16 lg:h-24 lg:w-24 object-cover object-center rounded-full"/>
            <div className='rounded-full shadow-lg p-2 -bottom-2 right-0 absolute bg-whitec flex justify-center align-center'>
              <img src={props.produk} className="w-5 h-5 object-cover object-center"/>
            </div>
        </div>
        <div className='md:w-3/4'>
          <p className='mt-8 md:mt-0 dark:text-whitec md:text-sm lg:text-base text-blackc'>{props.children}</p>
          <h4 className='font-medium mt-6 text-bluec dark:text-whitec'>{props.name}</h4>
          <p className='font-medium opacity-60 text-sm text-dark dark:text-whitec'>on {props.on}</p>
        </div>
    </div>
  )
}
