import React from 'react'

function StandardC(prop) {
  return (
    <div>
        <h1>This is Standard Child Component</h1>
        <h2 style={{color:'tomato'}}>Hello, How are you 
             <span className='bg-dark text-light'> {prop.name} </span>
        </h2>
        <h3 className='text-primary'>Role : {prop.Role}</h3>
        <h4>Salary : {prop.Sal}</h4>
        <h5>PersonalInfo : {prop.Details.email}</h5>
        <h5>Personla NO: {prop.Details.phone}</h5>
        <h6>Technologies : {prop.techn.join(", ")}</h6>
    </div>
  )
}

export default StandardC