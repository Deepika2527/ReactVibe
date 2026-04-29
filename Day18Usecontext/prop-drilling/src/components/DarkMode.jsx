import React, { useEffect, useState } from 'react'

function useDarkMode() {
    const [darkMode,setDarkMode] = useState(()=>{return localStorage.getItem('theme')==='dark'})

    useEffect(()=>{
        if(darkMode){
            document.body.style.backgroundColor ="#121212";
            document.body.style.color ="#fff";
            localStorage.setItem('theme','dark')

        }
        else{
            document.body.style.backgroundColor = "#ccc";
            document.body.style.color = "#333";
            localStorage.setItem('theme','light')
        }
    },[darkMode])



  return [darkMode,setDarkMode]
}

export default useDarkMode