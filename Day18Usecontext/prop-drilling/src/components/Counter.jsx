import React, { useState } from 'react'

function useCounter(intialvalue=0) {
    const [count,setCount]= useState(intialvalue)
    const Inc =() => setCount(prev=>prev+1)
    const Dec = () => setCount(prev=>prev-1)
    const Reset = () =>setCount(intialvalue)
  return {count,Inc,Dec,Reset}
}

export default useCounter