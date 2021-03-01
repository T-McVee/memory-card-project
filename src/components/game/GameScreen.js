import React, {useState, useEffect} from 'react'

import { Nav } from '../game/Nav'
import { GameBoard } from '../game/GameBoard'
import uuid from 'react-uuid';

export const GameScreen = props => {
  const { playerName, deckTheme, setRunGame } = props;
  
  // setup state
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([]);

  /* Api test */
  const apiCall = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${deckTheme}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }

  apiCall()

  // Create deck of n cards
  const createDeck = (deckSize) => {
    const deck = [];
    for (let i = 1;i <= deckSize; i++) {
      const card = {
        id: uuid(),
        content: i,
        isClicked: false,
      }

      deck.push(card);
    }

    return deck;
  }

  // Shuffle Deck
  const shuffleDeck = (deck) => {
    return deck.sort(() => Math.random() - 0.5)
  }

  // On mount populate cards array
  useEffect(() => {
    const deck = createDeck(12);
    setCards(shuffleDeck(deck)) 
  }, []);

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

      setCards(shuffleDeck(cards))

      // check if unclicked cards remain 
      if (cards.filter(card => card.isClicked === false)) {
        // - Shuffle cards and rerender
        console.log('Unclicked cards remain')
      } 
    }

    console.log(cards);
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
