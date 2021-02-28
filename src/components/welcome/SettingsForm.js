import { FormControl } from './FormControl'

export const SettingsForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form className="settings-form" onSubmit={(e) => handleSubmit(e)}>
      <FormControl htmlFor="name" label="Name">
        <input type="text" id="name" name="name" required />
      </FormControl>
      <span>Select your card deck</span>
      <div className="radio-group">
        <FormControl htmlFor="morty" label="Morty">
          <input type="radio" id="morty" value="Morty" name="deck" />
        </FormControl>
        <FormControl htmlFor="rick" label="Rick">
          <input type="radio" id="rick" value="Rick" name="deck"/>
        </FormControl>
      </div>
      <FormControl>
        <button type="submit">Start</button>
      </FormControl>
    </form>
  )
}
