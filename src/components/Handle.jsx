import React from 'react'

export default (paginator, text, callback) => {
  return (
    <li 
      className="page pagination-handle" 
      onClick={callback}>
      {text}
    </li>
  )
}