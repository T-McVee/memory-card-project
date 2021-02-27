import React from 'react'

export const Nav = props => {
  const { playerName, score} = props

  return (
    <nav>
      <div className="container">
        <div className="logo">{playerName}'s game</div>
        <div className="score">Current score: {score}</div>
        <div className="credits"></div>
      </div>
    </nav>
  )
}
