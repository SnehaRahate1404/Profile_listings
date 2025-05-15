import './About.css'

export default function About(){
    return(
        <>
            <div className="row">
                <div className="col-7">
                    <img src="/about-us.jpg" alt="" className='aboutusImg'/>
                </div>
                <div className="col-5 aboutUs">
                    <div className="aboutUsContent">
                        <p>At MapMyPeople, we believe that discovering people should be as seamless as finding places on a map. Our mission is to connect individuals, organizations, and professionals with their real-world locations—bridging the gap between digital identities and physical presence.
                        With our map-driven platform, users can explore rich profiles and see where people are located in real time. Whether you’re networking, recruiting, collaborating, or simply exploring, our intuitive interface lets you search, filter, and navigate through a world of connections—one pin at a time.</p>
                    </div>
                </div>
            </div>
        </>
    )
}