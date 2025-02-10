import { useState } from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './commons/components/Header'
import BookListScreen from './books/screens/BookListScreen'
import AuthorListScreen from './authors/screens/AuthorListScreen'
import AuthorAddScreen from './authors/screens/AuthorAddScreen'
import AuthorDetailsScreen from './authors/screens/AuthorDetailsScreen'
import BookAddScreen from './books/screens/BookAddScreen'
import BookDetailsScreen from './books/screens/BookDetailsScreen'
import UserLoginScreen from './users/screens/UserLoginScreen'
import UserRegistrationScreen from './users/screens/UserRegistrationScreen'
import NotFoundScreen from './commons/screens/NotFoundScreen'

function App() {
  


  return (
    <div>
      <Header title="World Wide Books"  />
      <div>
        <a className='btn btn-default' href="/authors">Author List</a>
        <a className='btn btn-default' href="/books">Book List</a>
        <a className='btn btn-default'  href="/authors/add">Add Author</a>
        <a className='btn btn-default' href="/books/add">Add Book</a>
        <a className='btn btn-default' href="/user/login">Login</a>
        <a className='btn btn-default' href="/user/register">Register</a>
      </div>
      <div className="screen container">
      <Router>
          <Routes>
            <Route path="/" element={<AuthorListScreen/>} />             
            <Route path="/authors" element={<AuthorListScreen />} />
            <Route path="/authors" element={<AuthorListScreen />} />
            <Route path="/authors/add" element={<AuthorAddScreen />} />
            <Route path="/authors/:id" element={<AuthorDetailsScreen />} />
            <Route path="/books" element={<BookListScreen />} />
            <Route path="/books/add" element={<BookAddScreen />} />
            <Route path="/books/:id" element={<BookDetailsScreen />} />
            <Route path="user/login" element={<UserLoginScreen />} />
            <Route path="user/register" element={<UserRegistrationScreen />} />            
            <Route path="*" element={<NotFoundScreen />} /> 
          </Routes>
        </Router>


      
      </div>
    </div>
  )
}

export default App
