import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Footer from './footer'
import Main from './main'
import Carousel from './carousel'

function Home () {
  return (
            <Router >

                <Carousel/>
                <Main/>
                <Carousel/>
                <Footer/>
            </Router>
  )
}

export default Home
