import { Suspense } from "react"

import './assets/css/styles.css'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/hero/Hero"
import Blackline from "./components/Blackline"
import Tourtypesicon from "./components/Tourtypesicon"
import Populartours from "./components/Populartours"
import Videobanner from "./components/Videobanner"
import Footer from "./components/Footer"
import Logoslider from "./components/Logoslider"
import ImageTextInline from "./components/ImageTextInline"
import Testimonial from "./components/Testimonial"
import Faq from "./components/Faq"
import Blog from "./components/Blog"
import Instaimages from "./components/Instaimages"
import AboutUs from "./components/AboutUs"



function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <Navbar />
        <Hero />
        <Blackline />
        <Tourtypesicon />
        <Populartours />
        <Videobanner />
        <Logoslider />
        <AboutUs />
        <ImageTextInline />
        <Testimonial />
        <Faq />
        {/* <Blog /> */}
        <Instaimages />
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
