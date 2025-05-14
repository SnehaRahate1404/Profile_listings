import AboutMe from "./AboutMe";
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from "./Hero";
import About from "../LandingPage/About";

export default function ProfilePage(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <AboutMe/>
            <Footer/>
        </>
    )
}