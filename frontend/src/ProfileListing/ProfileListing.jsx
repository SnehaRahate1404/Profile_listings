import Navbar from '../Navbar'
import Footer from '../Footer'
import SearchBar from './SearchBar'
import ListProfiles from './ListProfiles'

export default function ProfileListing(){
    return(
        <>
            <Navbar/>
            <SearchBar/>
            <ListProfiles/>
            <Footer/>
        </>
    )
}