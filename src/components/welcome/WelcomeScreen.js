import { Heading } from './Heading'
import { SettingsForm } from './SettingsForm' 

export const WelcomeScreen = props => {
  const { playerName, handleSubmit } = props
  return (
    <div className="welcome-screen">
      <Heading />
      <SettingsForm handleSubmit={handleSubmit}/>
      <img src="src/img/rick-and-morty.png" alt="" className=""/>
      <div className="characters"></div>
    </div>
  )
}
