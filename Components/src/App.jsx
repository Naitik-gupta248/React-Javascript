import './App.css'
import UserGreeting from './UserGreeting.jsx'

function App() {
  return(
    <div>
      <UserGreeting isLoggedIn = {true} username = "Brocode"/>
      <UserGreeting/>
    </div>
  )
}

export default App
