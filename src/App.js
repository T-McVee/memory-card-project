import React, { useState } from 'react'
import './style/main.css'
import { WelcomeScreen } from './components/welcome/WelcomeScreen'
import { GameScreen } from './components/game/GameScreen'

function App() {
  const [playerName, setPlayerName] = useState('Tim');
  const [runGame, setRunGame] = useState(false);
  return (
    <div className="App">
      {runGame ? ( <WelcomeScreen playerName={playerName}/>
      ) : ( 
        <GameScreen
          runGame={runGame}
          setRunGame={setRunGame} 
          playerName={playerName}
        />
      )}
    </div>
  );
}

export default App;
