import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Login from './Components/Login/Login'
import { NavLink } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar></Navbar>
      <Login></Login>
     
    </>
  )
}

export default App
