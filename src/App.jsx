import React from 'react'
import { useState } from 'react'
import Navbar from './Shared/Navbar/Navbar'

function App() {
  const  [theme, setTheme] = useState("dark")

  const toggleTheme = ()=>{
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
    </div>
  )
}

export default App
