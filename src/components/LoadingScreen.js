import React, { useEffect } from 'react'

export const LoadingScreen = (props) => {
  const { deckTheme, setCharacters, setIsLoading } = props;


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
  })

  return (
    <div className="loading-screen">
      <div className="container">
        <div className="loading-text">Loading...</div>
        <div className="loading-portal"></div>
      </div>
    </div>
  )
}
