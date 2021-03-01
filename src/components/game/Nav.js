import React from 'react'

export const Nav = props => {
  const { playerName, score} = props

  return (
    <nav>
      <div className="container">
        <div className="score">{playerName}'s score: {score}</div>
        <div className="credits"></div>
      </div>
    </nav>
  )
}
