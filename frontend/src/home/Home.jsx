import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Banner from '../components/Banner.jsx'
import Freebook from '../components/Freebook.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Freebook></Freebook>
      <Footer></Footer>
    </>
  )
}

export default Home
