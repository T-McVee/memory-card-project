import React from 'react'
import uuid from 'react-uuid'
import { Card } from './Card'

export const GameBoard = (props) => {
  const { cards } = props

  return (
    <section className="game-board" id="gameBoard">
      {cards.map(card => <Card key={uuid()} content={card}/>)}
    </section>
  )
}
