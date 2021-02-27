import React from 'react'

export const Nav = props => {
  const {score} = props

  return (
    <nav>
      <div className="container">
        <div className="logo">memory card</div>
        <div className="score">Current score: {score}</div>
        <div className="credits"></div>
      </div>
    </nav>
  )
}
