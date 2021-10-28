import React from 'react'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import BlogPage from './Pages/BlogPage'
import ContactUs from './Pages/ContactUs'
import CryptocurrencyPage from './Pages/CryptocurrencyPage'
import HomePage from './Pages/HomePage'
import NewsPage from './Pages/NewsPage'

const App = () => {
    return (
       <>
       <BrowserRouter>
       <Switch>
       <Route path="/" exact component={HomePage}/>
       <Route path="/aboutus" exact component={AboutUs}/>
       <Route path="/blogs" exact component={BlogPage}/>
       <Route path="/contactus" exact component={ContactUs}/>
       <Route path="/news" exact component={NewsPage} />
       <Route path="/coins" exact component={CryptocurrencyPage} />

       </Switch>
       </BrowserRouter>
     </>
    )
}

export default App
