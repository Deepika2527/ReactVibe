import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Nav from './components/Nav.jsx'
import BCarsouel from './components/BCarsouel.jsx'
import Cards from './components/Cards.jsx'

function App() {
  return (
    <div>
    {/* <h1 className='bg-info text-light'>Hello React</h1>
    <div className='container'>
      <div className="row">
        <div className="col-6">left</div>
        <div className="col-6">right</div>
      </div>

      </div> */}

    {/* Header section begins here */}
    <Nav/>
    {/* Navbar ends here */}
    {/* carousel starts here */}
    <BCarsouel/>
    {/* Carosuel ends with */}
    {/* Cards starte here */}
    <Cards/>

    
    </div>
  )
}

export default App