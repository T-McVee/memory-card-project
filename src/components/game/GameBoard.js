import { useEffect } from 'react'
import { Card } from './Card'

export const GameBoard = (props) => {
  const { characters, cards, createDeck, setCards, shuffleDeck, handleClick } = props

 

 

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
