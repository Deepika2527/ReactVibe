import React from 'react'

function ChildC(prop) {
    function childM(){
        prop.sendData("I received it-child")

    }
  return (
    <div>
        <h1>This is Callback child</h1>
       {/* <button onClick={prop.sendData}>Check Message</button> */}
       <button onClick={childM}>Check Message</button>
    </div>
  )
}

export default ChildC