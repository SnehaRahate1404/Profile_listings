import Name from "./Name";
import Skills from "./Skills";

export default function InfoSection(){
    return(
        <>
            <div className="info">
            <Name/>
            <Skills/>
            </div>
        </>
    )
}