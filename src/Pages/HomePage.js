import React from 'react'
import Blogs from '../components/Blogs/Blogs'
import Carosal from '../components/Carosal/Carosal'
import Coins from '../components/Coins/Coins'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
const HomePage = () => {
    return (
        <>
        <Navbar/>
        <Carosal/>
       <Home/>
       <Blogs/>
       <Coins/>
    
       <Footer/>
        </>
    )
}

export default HomePage
