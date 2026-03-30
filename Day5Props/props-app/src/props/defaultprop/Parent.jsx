import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div>
        <h1>This is Parent Prop</h1>
        <Child name={"Laptop"} brand={"Lenovo"} price={50000}/>
        <Child name={"Laptop"} brand={"Lenovo"} price={50000} paymentMode= {"online"}/>
    </div>
  )
}

export default Parent