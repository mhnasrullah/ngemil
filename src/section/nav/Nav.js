import React,{useState} from 'react'

export default function Nav(props) {
    
  return (
    <nav className='absolute'>
        <button
        type='button'
        onClick={()=>{props.setDark()}}>
        dark/light</button>
    </nav>
  )
}
