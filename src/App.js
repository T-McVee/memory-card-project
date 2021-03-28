import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './style/main.css'
import { WelcomeScreen } from './components/welcome/WelcomeScreen'
import { LoadingScreen } from './components/LoadingScreen'
import { VictoryScreen } from './components/VictoryScreen'
import { GameOverScreen } from './components/GameOverScreen'
import { GameScreen } from './components/game/GameScreen'


library.add(fab)

function App() {
  const [playerName, setPlayerName] = useState('Tim');
  const [deckTheme, setDeckTheme] = useState('morty');
  const [characters, setCharacters] = useState({});
  const [runGame, setRunGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleNameChange = (e) => {
    const {value} = e.target

    setPlayerName(value);
  }

  const toggleDeck = e => {
    const theme = e.target.value;
    setDeckTheme(theme)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setRunGame(true)
  }

  const returnHome = (e) => {
    e.preventDefault()

    setRunGame(false)
    setDeckTheme('morty')
    setVictory(false)
    setGameOver(false)
    setIsLoading(true)
  }

  // Check local storage is accessible
  const storageAvailable = (type) => {
    let storage;
    try {
      storage = window[type];
      let x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch (e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        (storage && storage.length !== 0);
    }
  }

  const saveHighScoreToLocalStorage = (highScore) => {
    //console.log('POPULATE STORAGE:');
    localStorage.setItem('highScore', JSON.stringify(highScore));
    //console.log(`Update: `, myLists);
  }

  const getHighScoreFromLocalStorage = () => {
    //console.log('SET LISTS:');
    const storageItem = JSON.parse(localStorage.getItem('highScore'));
    
    return storageItem;
  }

  return (
    <div className="App">
      {!runGame ? (
        <WelcomeScreen  
          deckTheme={deckTheme}
          handleNameChange={handleNameChange}
          toggleDeck={toggleDeck}
          handleSubmit={handleSubmit}
        />
      ) : runGame && isLoading ? (
        <LoadingScreen
          deckTheme={deckTheme} 
          characters={characters}
          setCharacters={setCharacters}
          setIsLoading={setIsLoading}
        />
      ) : runGame && victory ? (
        <VictoryScreen returnHome={returnHome} />
      ) : runGame && gameOver ? (
        <GameOverScreen returnHome={returnHome} />
      ) : (
        <GameScreen
          runGame={runGame}
          setRunGame={setRunGame}
          playerName={playerName}
          deckTheme={deckTheme}
          characters={characters}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setGameOver={setGameOver}
          setVictory={setVictory}
          storageAvailable={storageAvailable}
          saveHighScoreToLocalStorage={saveHighScoreToLocalStorage}
          getHighScoreFromLocalStorage={getHighScoreFromLocalStorage}
        />
      )
      }
    </div>
  );
}

export default App;
