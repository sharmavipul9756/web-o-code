import React from 'react'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

const App = () => {
    return (
       <>
       <Navbar/>
       <Home/>
       <Blogs/>
       <Footer/>
       </>
    )
}

export default App
