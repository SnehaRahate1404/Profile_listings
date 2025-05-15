import AboutMe from "./AboutMe";
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from "./Hero";

export default function ProfilePage({user}){

    let style = {
        backgroundColor : "#E6F5FF",
        height:"100vh"
    }

    return(
        <>
            <div style={style}>
                <Navbar/>
                <Hero/>
                <AboutMe user={user} />
                <Footer/>
            </div>
        </>
    )
}