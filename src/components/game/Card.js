import React from 'react'

export const Card = (props) => {
  const { content } = props
  
  return (
    <div className="card">
      <div className="content">{content}</div>
    </div>
  )
}
