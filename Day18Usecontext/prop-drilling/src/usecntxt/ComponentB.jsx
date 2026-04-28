import React from 'react'
import { createContext } from 'react'
import ComponentC from './ComponentC'




function ComponentB() {
  
  return (
    <div>
        <h1>This is componentB</h1>
        <ComponentC/>
    </div>
  )
}

export default ComponentB