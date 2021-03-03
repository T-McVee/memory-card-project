import React from 'react'

export const Card = (props) => {
  const { id, content, isClicked, handleClick } = props
  
  return (
    <div id={id} className="card" onClick={(e) => handleClick(e)}>
      <div className="content-img">
        <img className="avatar" src={content.image} alt=""/>
      </div>
      <div className="content-name">{content.name}</div>
      {/* Cheat Mode */}
      {isClicked && <p>Clicked</p>}
    </div>
  )
}
