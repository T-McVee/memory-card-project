import React, {useState, useEffect} from 'react'
import { CSSTransition } from 'react-transition-group' 

export const GameOverScreen = (props) => {
  const { returnHome } = props
  
  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    setInProp(true)

    return () => {
      setInProp(false);
    }
  }, [])

  return (
      <div className="victory-screen">
        <CSSTransition
          in={inProp}
          timeout={3000}
          classNames="spin"
          appear
          unmountOnExit
        >
          <div className="container">
            <h2>YOU BLEW IT MORTY!</h2>
            <button className="btn-large" onClick={e => returnHome(e)}>Return to home</button>
          </div>
        </CSSTransition>
        <div className="characters characters-fail"></div>
      </div>
    
  )
}
