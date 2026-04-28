import React, { useContext } from 'react'
import { dataContext } from './ComponentA'



function ComponentC() {
    let name = useContext(dataContext)
  return (
    <div>
        <h1>This is component C</h1>
        <h2>Im <b className='text-secondary'>{name} and learning react js</b></h2>
    </div>
  )
}

export default ComponentC