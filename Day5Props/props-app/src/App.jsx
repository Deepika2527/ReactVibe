import React from 'react'
import StandardP from './props/standardprops/StandardP'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Dparent from './props/destructuringprops/Dparent.jsx'
import CompA from './props/propdrilling/CompA.jsx'
import ParentC from './props/callbackprops/ParentC.jsx'
import Parent from './props/defaultprop/Parent.jsx'

function App() {
  return (
    <div>
      <h1>Props day 1....</h1>

      {/* <hr />
      <StandardP/>

      <hr />
      <Dparent/> */}
      {/* <hr />
      <p>Prop drilling example</p>
      <CompA/> */}


      {/* <p>This is example of call backprops</p>
      <ParentC/> */}

      <p>This is default props</p>
      <Parent/>


    </div>
  )
}

export default App