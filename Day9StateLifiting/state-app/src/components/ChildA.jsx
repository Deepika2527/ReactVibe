import React from 'react'

function ChildA({coin,setcoin}) {
  return (
    <div>
        <div className="card border-warning m-2 p-3">Child A
       <h2 className='text-warning'>Coins:{coin}</h2>
         <button className="btn btn-primary" onClick={()=>{setcoin(coin+1)}}>Add Me</button>


        </div>
    </div>
  )
}

export default ChildA