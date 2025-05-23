import './SearchBar.css'

export default function SearchBar(){
    return(
        <>
           <div className="search">
             <h5>Profiles</h5>
             <div className="searchForm">
                <div class="container-fluid">
                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
             </div>
           </div>
        </>
    )
}