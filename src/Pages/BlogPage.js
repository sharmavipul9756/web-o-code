import React from 'react'
import Blogs from '../components/Blogs/Blogs'
import MainBlog from '../components/Blogs/MainBlog'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const BlogPage = () => {
    return (
        <>
         <Navbar/>
         <div className="p-3">
         <Blogs/>
         <MainBlog/> 
         </div>
         <Footer/>   
        </>
    )
}

export default BlogPage
