import React from 'react'

export default function Heading(props) {
    let className = 'text-bluec font-extrabold text-4xl dark:text-whitec '+(props.className == undefined ? '' : props.className);
  return (
    <h2 className={className}>{props.children}</h2>
  )
}
