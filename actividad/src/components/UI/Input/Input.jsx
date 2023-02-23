import React from 'react'

export const Input = ({type,styleInput,placeHolder})=> {
  return (
    <input type={type} id={styleInput} placeholder = {placeHolder}/>
  )
}
