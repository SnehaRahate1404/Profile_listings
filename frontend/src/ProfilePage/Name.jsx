import './Name.css'

export default function Name({ user }){
    return(
        <>
            <div className="name">
                <img src={`/${user.avatar}`} alt="" className='userimage' />
                <p>{ user.name }</p>
            </div>
        </>
    )
}