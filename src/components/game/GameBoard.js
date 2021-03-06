import { Card } from './Card'

export const GameBoard = (props) => {
  const { cards, handleClick } = props

  return (
    <section className="game-board-outer" id="gameBoard">
      <div className="game-board-inner">
        {cards.map(card => 
          <Card 
            key={card.id} 
            id={card.id}
            content={card.content}
            isClicked={card.isClicked}
            handleClick={handleClick}
          />
        )}
      </div>
    </section>
  )
}
