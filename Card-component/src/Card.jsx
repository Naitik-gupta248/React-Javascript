import profilePic from './assets/react.svg'
function Card(){
    return(
        <div className="card">
            <img className="card-img"src={profilePic} alt="profile Picture" />
            <h2 className='card-title'>Naitik</h2>
            <p className='card-text'>Trying to solve my problems.</p>
        </div>
    )
}
export default Card