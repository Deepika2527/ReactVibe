import React from 'react'

function CompC({name}) {
  return (
    <div>
        <h1>This is Compnent C</h1>
        <h2 >I have completed my Js and currently i'm learning <b className='text-primary'>{name}</b></h2>
    </div>
  )
}

export default CompC