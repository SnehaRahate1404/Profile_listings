import './Footer.css'

export default function Footer(){
    return(
        <>
            <div className="footerContents">
                <div className="copyright">
                    <i class="fa-regular fa-copyright"></i>
                    <p>MapMyPeople</p>
                </div>
                <div className="github">
                    <i class="fa-brands fa-github"></i>
                    <a href="" className="footer-socials">GitHub</a>
                </div>
                <div className="mail">
                    <i class="fa-solid fa-at"></i>
                    <a href="" className="footer-socials">Mail</a>
                </div>
            </div>
        </>
    )
}