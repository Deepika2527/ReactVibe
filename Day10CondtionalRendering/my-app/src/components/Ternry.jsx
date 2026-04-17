import React from 'react'

function Ternry() {
    const role = "Developer"
    const exp = false
  return (
    <div>
        {role === "Developer"?<h1>Welcome Developer</h1>:<h2>Only Developer can acess</h2>}
        <p>About his experience</p>
        {exp? (
            <h1>He is having 5 years of exp</h1> ):
        (
        <h1>He is a  fresher</h1>)}

    </div>
  )
}

export default Ternry