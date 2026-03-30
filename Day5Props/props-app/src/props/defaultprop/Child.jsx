import React from 'react'

function Child({name="dummy",brand="unknow",price="notsure",paymentMode="unknow"}) {
  return (
    <div>
        <h1>This is Child prop</h1>
        <h4>Name: {name}</h4>
        <h4>Brand:{brand}</h4>
        <h4>Price:{price}</h4>
        <h4>Paymentmode:{paymentMode}</h4>     
    

    </div>

  )
}

export default Child