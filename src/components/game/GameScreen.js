import React, {useState, useEffect} from 'react'

import { Nav } from '../game/Nav'
import { GameBoard } from '../game/GameBoard'
import uuid from 'react-uuid';

export const GameScreen = props => {
  const { playerName, setRunGame } = props;
  
  // setup state
  const [score, setScore] = useState(0);
  const [cardIsClicked, setCardIsClicked] = useState(false)
  const [cards, setCards] = useState([]);

  // Create deck of n cards
  const createDeck = (deckSize) => {
    const deck = [];
    for (let i = 1;i <= deckSize; i++) {
      const card = {
        id: uuid(),
        content: i,
        isClicked: cardIsClicked,
      }

      deck.push(card);
    }

    return deck;
  }

  //populate the cards array with the created deck on mount
  useEffect(() => setCards(createDeck(12)), []);

  // return the id of the clicked card
  const getId = (e) => {
    if (e.target.id) return e.target.id
      return e.target.parentElement.id
  }

  //handle card click
  const handleClick = (e) => {
    const id = getId(e);
    
    const [clickedCard] = [...cards.filter(card => card.id === id)];

    if (clickedCard.isClicked) {
      setRunGame(false);
    } else {
      clickedCard.isClicked = true;

      const otherCards = cards.filter(card => card.id !== id)
      setCards(otherCards.concat(clickedCard));
      setScore(score + 1);

      setCards(cards.sort(() => Math.random() - 0.5))

      // check if unclicked cards remain 
      if (cards.filter(card => card.isClicked === false)) {
        // - Shuffle cards and rerender
        console.log('Unclicked cards remain')
      } 
    }

    console.log(cards);

    /* 
    onClick - 
    - identify card from cards array
    - check if card has been clicked
    - IF clicked > end game
      - Else > 
        - Set card's isClicked to true 
        - increment score + 1
        - Shuffle cards and rerender
      - Check if unclicked cards remain
      - If false > end game
      - if true > return
    */




    //const clickedCard = cards.filter(card => card.id === id)
  }

  return (
    <div className="game-screen">
      <Nav playerName={playerName} score={score}/>
      <GameBoard 
        cards={cards}
        handleClick={handleClick}
      />
    </div>
  )
}