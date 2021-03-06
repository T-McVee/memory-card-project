import React from 'react'

export const VictoryScreen = (props) => {
  const { returnHome } = props
  
  return (
    <div className="victory-screen">
      <div className="container">
      <h2>YOU DID IT MORTY!</h2>
      <button className="btn-large" onClick={e => returnHome(e)}>Return to home</button>
      </div>
    </div>
  )
}
