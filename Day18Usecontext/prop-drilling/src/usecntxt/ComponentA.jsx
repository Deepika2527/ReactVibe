import React from 'react'
import { createContext } from 'react'
import ComponentB from './ComponentB'

// creating an object with createContext
export const dataContext = createContext()
console.log(dataContext);


function ComponentA() {
      let name = 'AnuRadha'
  return (
    <div>
        <h1>This is my Compnent A </h1>
        <dataContext.Provider value={name}>
            <ComponentB/>


        </dataContext.Provider>
    </div>
  )
}

export default ComponentA