import React from 'react'
import { Image } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import about from '../images/about.svg'

const AboutUs = () => {
    return (
        <>
          <Navbar/>
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main className="px-3">
    <h1>About Us</h1>
    <p className="lead">We provide daily update of stock market and cryptocurrencies with latest news and blogs.To help people invest in crypto as blockchain is the future we provide crypto coins details.</p>
    <Image src={about} fluid />
  </main>
  </div>
          <Footer/>  
        </>
    )
}

export default AboutUs
