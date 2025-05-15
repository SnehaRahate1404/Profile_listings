import { Link } from "react-router-dom"
import './Hero.css'
export default function Hero(){
    return(
        <>
            <div className="hero-section">
                <div className="hero-heading">
                    <h1>"Discover Faces, Find Places"</h1>
                </div>
                <div className="hero-description">
                    <h4>"Explore profiles and their real-world locations—all in one intuitive map-driven experience, where each profile is seamlessly connected to its geographical context, providing a richer understanding of who they are and where they are based."</h4>
                </div>
                <div className="auth-buttons">
                    <Link to="/ProfileListing"><button className="registerfarmer">Explore Profiles</button></Link>
                </div>
            </div>
        </>
    )
}