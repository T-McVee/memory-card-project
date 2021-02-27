import React from 'react'
import uuid from 'react-uuid'
import { Card } from './Card'

export const GameBoard = (props) => {
  const { cards, handleClick } = props

  return (
    <section className="game-board" id="gameBoard">
      {cards.map(card => 
        <Card 
          key={card.id} 
          id={card.id}
          content={card.content}
          handleClick={handleClick}
        />
      )}
    </section>
  )
}
