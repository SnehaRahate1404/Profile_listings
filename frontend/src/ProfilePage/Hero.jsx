import InfoSection from './InfoSection'
import Map from './Map'

export default function Hero(){
    let style = {
        margin:"20px",
        with:"100%"
    }

    return(
        <>
            <div className="row" style={style}>
                <div className="col-3">
                    <InfoSection/>
                </div>
                <div className="col-9">
                    <Map/>
                </div>
            </div>
        </>
    )
}