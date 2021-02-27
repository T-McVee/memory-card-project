import React from 'react'

export const Card = (props) => {
  const { id, content, handleClick } = props
  
  return (
    <div id={id} className="card" onClick={(e) => handleClick(e)}>
      <div className="content">{content}</div>
    </div>
  )
}
