import React from 'react'

export default function Input({label, type, id, placeholder}) {
  return (
    <>
      <label>{label}</label>
      <input type={type} id={id} placeholder={placeholder}/>
    </>
  )
}
