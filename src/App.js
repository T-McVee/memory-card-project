import React, { useState } from 'react'
import './style/main.css'
import { WelcomeScreen } from './components/welcome/WelcomeScreen'
import { LoadingScreen } from './components/LoadingScreen'
import { VictoryScreen } from './components/VictoryScreen'
import { GameScreen } from './components/game/GameScreen'

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
  return (
    <div className="App">
      {!runGame ?
        <WelcomeScreen  
          deckTheme={deckTheme}
          handleNameChange={handleNameChange}
          toggleDeck={toggleDeck}
          handleSubmit={handleSubmit}
        />
       : runGame && isLoading ? 
        <LoadingScreen
          deckTheme={deckTheme} 
          characters={characters}
          setCharacters={setCharacters}
          setIsLoading={setIsLoading}
        />
       : !gameOver && victory ? 
        <VictoryScreen />
       : 
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
        />}
    </div>
  );
}

export default App;
