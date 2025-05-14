import Hero from './Hero'
import About from './About'
import Techstack from './Techstack'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Register from './Register'

export default function LandingPage(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Techstack/>
            <Register/>
            <Footer/>
        </>
    )
}