import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './commons/components/Header'
import BookListScreen from './books/screens/BookListScreen'
import AuthorListScreen from './authors/screens/AuthorListScreen'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header title="World Wide Books"/>
      <div className="screen container">
      <AuthorListScreen/>
      </div>
    </div>
  )
}

export default App
