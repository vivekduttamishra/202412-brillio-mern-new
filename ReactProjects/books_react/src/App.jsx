import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthorListScreen from './screens/AuthorListScreen'
import Header from './components/Header'
import { BrowserRouter,Navigate,Routes,Route } from 'react-router-dom'
import AuthorDetailsScreen from './screens/AuthorDetailsScreen'
import UserLoginScreen from './screens/UserloginScreen'
import NotFoundScreen from './screens/NotFoundScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header title="Book's Web" />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/authors" />} />
          <Route path="/authors" element={<AuthorListScreen />} />
          <Route path="/authors/:id" element={<AuthorDetailsScreen />} />
          <Route path="/login" element={<UserLoginScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
