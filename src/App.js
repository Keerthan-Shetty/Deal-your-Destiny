import React from 'react'
import Header from './Components/Header/header'
import Main from './Components/Main/main'
import AboutContent from './Components/AboutContent/aboutcontent'
import BlogPreview from './Components/BlogPreview/blogpreview'
import CardCarousel from './Components/Cardcarousel/cardcarousel'
import CustomerCare from './Components/CustomerCare/customercare'
import Footer from './Components/Footer/footer'

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <AboutContent />
      <BlogPreview />
      <CardCarousel />
      <CustomerCare />
      <Footer />
    </div>
  )
}

export default App