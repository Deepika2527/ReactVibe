import React from 'react'

function ChildB({coin}) {
  return (
    <div>
        <div className="card m-2 p-3">
            child B

        <h2>Coins: {coin}</h2>
        </div>
    </div>
  )
}

export default ChildB