import { Heading } from './Heading'
import { SettingsForm } from './SettingsForm' 


export const WelcomeScreen = props => {
  const { handleNameChange, toggleDeck, handleSubmit } = props

  return (
    <div className="welcome-screen">
      
      <Heading />
      
      <SettingsForm 
        handleNameChange={handleNameChange}
        toggleDeck={toggleDeck}
        handleSubmit={handleSubmit}
      /> 
      
      <div className="characters"></div>
    </div>
  )
}
