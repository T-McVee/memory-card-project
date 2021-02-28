import React from 'react'

export const FormControl = (props) => {
  const { htmlFor, label, children } = props;
  
  return (
    <div className="form-control">
      {label && <label htmlFor={htmlFor}>{label}:</label>}
      {children}
    </div>
  )
}
