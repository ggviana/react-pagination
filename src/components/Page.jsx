import React  from 'react'

export default (text, number, currentPage, callback) => {
  return (
    <li 
      className={`page page-${number} ${number === currentPage ? 'active' : ''}`}
      key={number}
      onClick={callback}>
      {text}
    </li>
  )
}