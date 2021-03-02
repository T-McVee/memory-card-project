import { Children } from 'react';
import { FormControl } from './FormControl'

export const SettingsForm = (props) => {
  const { handleNameChange, toggleDeck, handleSubmit } = props;

  return (
    <form className="settings-form" onSubmit={(e) => handleSubmit(e)}>
      <FormControl htmlFor="name" label="Name">
        <input 
          type="text"   
          id="name"  
          name="name" 
          onChange={e => handleNameChange(e)}
          required 
        />
      </FormControl>
      <span>Select your card deck</span>
      <div className="radio-group">
        <FormControl htmlFor="morty" label="Morty">
          <input 
            type="radio" 
            id="morty" 
            value="morty" 
            name="deck" 
            onChange={e => toggleDeck(e)} 
            checked={true}  
          />
        </FormControl>
        <FormControl htmlFor="rick" label="Rick">
          <input type="radio" id="rick" value="rick" name="deck" onChange={e => toggleDeck(e)}/>
        </FormControl>
      </div>
      <FormControl>
        <button type="submit">Start</button>
      </FormControl>
      {props.children}
    </form>
  )
}
