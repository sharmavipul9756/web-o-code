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
       <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#212529" fill-opacity="1" d="M0,160L17.1,176C34.3,192,69,224,103,234.7C137.1,245,171,235,206,234.7C240,235,274,245,309,256C342.9,267,377,277,411,272C445.7,267,480,245,514,245.3C548.6,245,583,267,617,250.7C651.4,235,686,181,720,160C754.3,139,789,149,823,138.7C857.1,128,891,96,926,112C960,128,994,192,1029,208C1062.9,224,1097,192,1131,176C1165.7,160,1200,160,1234,160C1268.6,160,1303,160,1337,149.3C1371.4,139,1406,117,1423,106.7L1440,96L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path>
</svg>
       
       </>
       <Footer/>
        </>
    )
}

export default HomePage
