import React from 'react'
import useCounter from './Counter'

function CounterApp() {
    const {count,Inc,Dec,Reset} = useCounter()
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
        <div className="text-center">
            <h1>Count: {count}</h1>
            <button className="btn btn-primary me-2" onClick={Inc}>Increment</button>
            <button className="btn btn-secondary me-2" onClick={Dec}>Decrement</button>
            <button className="btn btn-warning me-2" onClick={Reset}>Reset</button>
        </div>

        
    </div>
  )
}

export default CounterApp