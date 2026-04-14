import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import RouterDom from '../reactdum/RouterDom'

function MainLayout() {
  return (
    <div>
        <Header/>

        <hr />
        <RouterDom/>
        <Card/>
        <Footer/>
    </div>
  )
}

export default MainLayout