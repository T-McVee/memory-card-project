import React, {useState, useEffect} from 'react'
import { Nav } from '../game/Nav'
import { GameBoard } from '../game/GameBoard'
import uuid from 'react-uuid';

export const GameScreen = props => {
  const { 
    playerName, 
    characters, 
    isLoading, 
    setIsLoading, 
    setRunGame, 
    setGameOver, 
    setVictory,
  } = props;
  
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([]);
  

  // Create deck of n cards
  const createDeck = (deckSize, data) => {
    const deck = [];

    for (let i = 1;i <= deckSize; i++) {
      const card = {
        id: uuid(),
        content: {
          image: data[i + 6].image,
          name: data[i + 6].name,
        },
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
    const deck = createDeck(12, characters);
    setCards(shuffleDeck(deck));
   
    return () => {
      setIsLoading(true)
    }
  }, []);
   
  // return the id of the clicked card
  const getId = (e) => {
    if (e.target.id) return e.target.id
    if (e.target.parentElement.id) return e.target.parentElement.id
      return e.target.parentElement.parentElement.id
  }

  //handle card click
  const handleClick = (e) => {
    const id = getId(e);
    
    const [clickedCard] = [...cards.filter(card => card.id === id)];

    if (clickedCard.isClicked) {
      setRunGame(false);
      //setGameOver(true);

    } else {
      clickedCard.isClicked = true;

      const otherCards = cards.filter(card => card.id !== id)
      setCards(otherCards.concat(clickedCard));
      setScore(score + 1);

      setCards(shuffleDeck(cards))

      // check if all cards are clicked
      if (cards.filter(card => card.isClicked === false).length === 0) {
        console.log('YOU DID IT MORTY!')
        setVictory(true);
      } 
        // - Shuffle cards and rerender
        //setRunGame(false)
    }
  }

  return (
    <div className="game-screen">
      <Nav playerName={playerName} score={score}/>
      {!isLoading &&
        
          <GameBoard 
            characters={characters}
            createDeck={createDeck}
            cards={cards}
            setCards={setCards}
            shuffleDeck={shuffleDeck}
            handleClick={handleClick}
          />
        
      }
    </div>
  )
}
