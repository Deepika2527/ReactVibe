import React from 'react'

function Switchc() {
    // const day = "Saturday"
    // const day = "Sunday"
    const day = "Monday"
    const holiday =()=>{
        switch(day) {
            case "Saturday": return <h1 style={{color:'orange'}}>Interview preparation</h1>
            case "Sunday" : return <h2 style={{color:'yellow'}}>Hurray Hoilday</h2>
            default: return <h2 style={{color:'blue'}}>Monday -Friday we are having clasees</h2>
            
        }
    }
  return (
    <div>
        <h1>About my Weekplan</h1>
        {holiday()}
    </div>
  )
}

export default Switchc