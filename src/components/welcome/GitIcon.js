import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const GitIcon = () => {
  return (
    <div className="git-icon">
      <a href="https://github.com/T-McVee/memory-card-project" target="blank">
        <span>Created by T-McVee </span>
        <div className="container">
          <FontAwesomeIcon icon={["fab", "github"]}/>
        </div>
      </a>
    </div>
  )
}
