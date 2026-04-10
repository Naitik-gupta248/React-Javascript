import './App.css'
import Student from './Student.jsx'

function App() {
  return (
    <div>
      <Student name="Spider" age={30} isStudent="true" />
      <Student/>
    </div>
  )
}

export default App
