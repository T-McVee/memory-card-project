import React, { useState } from 'react'
import { useEffect } from 'react'
import { Heading } from './Heading'
import { SettingsForm } from './SettingsForm'
import { CSSTransition } from 'react-transition-group' 

export const WelcomeScreen = props => {
  const { handleNameChange, toggleDeck, handleSubmit, } = props

  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
    return () => {
      setInProp(false);
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
      <div className="welcome-screen">
        <Heading />
        <SettingsForm 
          handleNameChange={handleNameChange}
          toggleDeck={toggleDeck}
          handleSubmit={handleSubmit}
        /> 
        <div className="characters"></div>
      </div>
    </CSSTransition>
  )
}
