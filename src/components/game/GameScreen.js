import React, {useState, useEffect} from 'react'

import { Nav } from '../game/Nav'
import { GameBoard } from '../game/GameBoard'

export const GameScreen = props => {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([]);

  
    const deck = [
      1,2,3,4,5,6,7,8,9,10,11,12
    ];

    useEffect(() => setCards(deck), []);

  return (
    <div className="game-screen">
      <Nav score={score}/>
      <GameBoard cards={cards}/>
    </div>
  )
}
