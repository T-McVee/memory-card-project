import React from 'react'

export const Nav = props => {
  const { playerName, score, highScore} = props

  return (
    <nav>
      <div className="container">
        <div className="score">
          <div className="current">{playerName}'s score: {score}</div>
          <div className="high">High score: {highScore}</div>
        </div>
        <div className="credits"></div>
      </div>
    </nav>
  )
}
