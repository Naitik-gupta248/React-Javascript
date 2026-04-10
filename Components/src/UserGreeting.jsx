
import PropTypes from 'prop-types'

function UserGreeting(props) {
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to continue</h2>

    // }

    const welcomeMsg = <h2 className="welcome-msg">Welcome {props.username}</h2>

    const loginPrompt = <h2 className="Login-prompt">Please log in again</h2>
    return (props.isLoggedIn ? welcomeMsg : loginPrompt)
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: true,
    username: "Naitik",
}
export default UserGreeting;