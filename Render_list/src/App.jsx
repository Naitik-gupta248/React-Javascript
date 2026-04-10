import './App.css'
import List from './List.jsx'

function App() {

    const fruits = [{ id: 1, name: "Apple", calories: 20 },
    { id: 2, name: "Banana", calories: 10 },
    { id: 3, name: "Cherry", calories: 15 },
    { id: 4, name: "Date", calories: 25 },
    { id: 5, name: "Coconut", calories: 45 }];

  return(
    <div>
      <List items={fruits} category="Fruits"/>
    </div>
  )
}

export default App
