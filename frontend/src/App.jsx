import LandingPage from "./LandingPage/LandingPage";
import ProfileListing from "./ProfileListing/ProfileListing";
import ProfilePage from "./ProfilePage/ProfilePage";
import {Routes , Route} from 'react-router-dom';
import 'leaflet/dist/leaflet.css';


export default function App(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/ProfileListing" element={<ProfileListing/>}></Route>
            <Route path="/ProfilePage/:id" element={<ProfilePage/>}></Route>
        </Routes>
    )
}