import React, {useState, useEffect} from 'react'
import { CSSTransition } from 'react-transition-group' 
import { Nav } from '../game/Nav'
import { GameBoard } from '../game/GameBoard'
import uuid from 'react-uuid';

export const GameScreen = props => {
  const { 
    playerName, 
    characters, 
    isLoading, 
    setIsLoading,
    setGameOver, 
    setVictory,
    storageAvailable,
    saveHighScoreToLocalStorage,
    getHighScoreFromLocalStorage
  } = props;
  
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState({name:'', score: 0,});
  const [cards, setCards] = useState([]);
  const [inProp, setInProp] = useState(false);
  

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
    setInProp(true);
    const deck = createDeck(12, characters);
    setCards(shuffleDeck(deck));

    //check localstorage for highscore 
    if (storageAvailable('localStorage') && getHighScoreFromLocalStorage()) {
      setHighScore(getHighScoreFromLocalStorage());
    } 
   
    return () => {
      setInProp(false)
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
      
      // Check for new high score
      if (currentScore >= highScore.score) {
        saveHighScoreToLocalStorage({name: playerName, score: currentScore})
      }
      
      setGameOver(true);
      
    } else {
      clickedCard.isClicked = true;

      const otherCards = cards.filter(card => card.id !== id)
      setCards(otherCards.concat(clickedCard));
      setCurrentScore(currentScore + 1);
      console.log('current score:', currentScore)

      setCards(shuffleDeck(cards))

      // check if all cards are clicked
      if (cards.filter(card => card.isClicked === false).length === 0) {
        
        // Check for new high score
        if (currentScore + 1 >= highScore.score) {
          saveHighScoreToLocalStorage({name: playerName, score: currentScore + 1})
        }
        setVictory(true);
      } 
    }
  }

  

  return (
    <CSSTransition
      in={inProp}
      timeout={1000}
      classNames="fade"
      appear
      unmountOnExit
    >
      <div className="game-screen">
        <Nav playerName={playerName} score={currentScore} highScore={highScore}/>
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
    </CSSTransition>
  )
}
