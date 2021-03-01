import React, { useState } from 'react'
import './style/main.css'
import { WelcomeScreen } from './components/welcome/WelcomeScreen'
import { GameScreen } from './components/game/GameScreen'

function App() {
  const [playerName, setPlayerName] = useState('Tim');
  const [deckTheme, setDeckTheme] = useState('morty');
  const [runGame, setRunGame] = useState(false);

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
        <WelcomeScreen  
          deckTheme={deckTheme}
          handleNameChange={handleNameChange}
          toggleDeck={toggleDeck}
          handleSubmit={handleSubmit}
        />
      ) : ( 
        <GameScreen
          runGame={runGame}
          setRunGame={setRunGame} 
          playerName={playerName}
          deckTheme={deckTheme}
        />
      )}
    </div>
  );
}

export default App;
