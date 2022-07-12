import React from 'react'

export default function Subheading(props) {

    let className = (props.className == undefined ? " " : props.className) + " opacity-80 mt-3 text-blackc md:w-7/12 lg:w-5/12 dark:text-whitec";
  return (
    <p className={className}>{props.children}</p>
  )
}
