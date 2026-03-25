import React from 'react'
import StandardC from './StandardC'

function StandardP() {
    const name = "Anu"
    const role = "Developer"
    const salary = 70000
    const details = {
        phone : "1234556",
        email : "anu@gmail.com"
    
    }
    const tech = ["Js","Python","React"]
  return (
    <div>

        <h1 className='text-secondary'>This is Standard Parent component {name}</h1>
        <StandardC 
        name = {name}
        Role = {role}
        Sal  = {salary}
        Details = {details}
        techn = {tech}
        
        
        
        />
        
    </div>
  )
}

export default StandardP