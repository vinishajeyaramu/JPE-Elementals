import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HomeMain from '../../Components/Homemain/HomeMain'
import Footer from '../../Components/Footer/Footer'
 
const Home = () => {
  return (
    <>
    <Navbar/>
    <main>
      <HomeMain/>
    </main>
    <Footer/>
    </>
  )
}

export default Home