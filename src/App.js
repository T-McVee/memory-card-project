import React, { useState } from 'react'
import './style/main.css'
import { WelcomeScreen } from './components/welcome/WelcomeScreen'
import { LoadingScreen } from './components/LoadingScreen'
import { GameScreen } from './components/game/GameScreen'

function App() {
  const [playerName, setPlayerName] = useState('Tim');
  const [deckTheme, setDeckTheme] = useState('morty');
  const [runGame, setRunGame] = useState(false);
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
      {!runGame ? ( 
        <LoadingScreen />
        /* <WelcomeScreen  
          deckTheme={deckTheme}
          handleNameChange={handleNameChange}
          toggleDeck={toggleDeck}
          handleSubmit={handleSubmit}
        /> */
      ) : isLoading ? ( 
        <GameScreen
          runGame={runGame}
          setRunGame={setRunGame}
          playerName={playerName}
          deckTheme={deckTheme}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ) : <p>Yay</p>}
    </div>
  );
}

export default App;
