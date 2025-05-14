import Navbar from '../Navbar'
import Footer from '../Footer'
import SearchBar from './SearchBar'
import ProfileCard from './ProfileCard'

export default function ProfileListing(){
    return(
        <>
            <Navbar/>
            <SearchBar/>
            <ProfileCard/>
            <Footer/>
        </>
    )
}