import React from 'react'

function Buttn({text,onClick}) {
  return (
    <button className='btn btn-primary mx-3' onClick={onClick}>{text}</button>
  )
}

export default Buttn