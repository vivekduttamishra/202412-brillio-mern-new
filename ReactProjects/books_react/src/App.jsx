import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthorListScreen from './screens/AuthorListScreen'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header title1="Book's Web" />
      <div className="main-content">
        <AuthorListScreen/>

      </div>
    </div>
  )
}

export default App
