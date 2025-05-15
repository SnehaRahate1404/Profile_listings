import './Navbar.css'
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <div className="navbar">
                    <div className="comapny_detils">
                        <div className="company_logo">
                            <img src="/logo.png" alt="" />
                        </div>
                        <div className="company_name">
                            <p>MapMyPeople</p>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li className="nav-li"><a href="">Home</a></li>
                            <li className="nav-li"><a href="">Profiles</a></li>
                            <li className="nav-li"><a href="">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="company-login">
                        <Link to="/CompanyLogin"><button>Admin Login</button></Link>
                    </div>
            </div>
        </>
    )
}