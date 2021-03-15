import React, {useState, useEffect} from 'react'
import { CSSTransition } from 'react-transition-group' 

export const VictoryScreen = (props) => {
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
            <h2>YOU DID IT MORTY!</h2>
            <button className="btn-large" onClick={e => returnHome(e)}>Return to home</button>
          </div>
        </CSSTransition>
      </div>
    
  )
}
