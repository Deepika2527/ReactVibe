import React from 'react'
import useDarkMode from './DarkMode'

function DarkModeApp() {
    const [darkMode, setDarkMode] = useDarkMode()
  return (
    <div className='text-center'>
        <h1>{darkMode ? 'Dark mode 🌕🌛' : 'Light Mode ☀️🌞'}</h1>
        <button className="btn btn-primary" onClick={()=>setDarkMode(!darkMode)}>AddToogle</button>
        
    </div>
  )
}

export default DarkModeApp