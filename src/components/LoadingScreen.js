import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group' 

export const LoadingScreen = (props) => {
  const { deckTheme, setCharacters, setIsLoading, } = props;

  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    
    (async () => {
      const url = `https://rickandmortyapi.com/api/character/?name=${deckTheme}`
      const response = await fetch(url)
      const data = await response.json()
      setCharacters(data.results)
      setTimeout(() => {
        setIsLoading(false)
      }, 2000); 
    })()
    setInProp(true)

    return () => {
      setInProp(false)
    }
  }, [])

  return (
    <CSSTransition
      in={inProp}
      timeout={1000}
      classNames="fade"
      appear
      unmountOnExit
    >
      <div className="loading-screen">
        <div className="container">
          <div className="loading-text">Loading...</div>
          <div className="loading-portal"></div>
        </div>
      </div>
    </CSSTransition>
  )
}
