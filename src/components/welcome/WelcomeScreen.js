import { Heading } from './Heading'
import { SettingsForm } from './SettingsForm' 

export const WelcomeScreen = props => {
  const { playerName, handleSubmit } = props
  return (
    <div className="welcome-screen">
      <div className="rm-logo"></div>
      <Heading />
      <SettingsForm handleSubmit={handleSubmit}/>
      <div className="characters"></div>
    </div>
  )
}
