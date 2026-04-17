import React, { useState } from 'react'
import ChildB from './ChildB'
import ChildA from './ChildA'


function Parent() {
    let [coins,setcoins] = useState(0)
  return (
    <div>
        <div className='container card m-3 p-5 border rounded bg-light text-center'>

            <h2 className='text-primary'>Coins: {coins}</h2>

            <ChildA coin= {coins} setcoin= {setcoins}/>

            <ChildB coin={coins}/>




        </div>
    </div>
  )
}

export default Parent