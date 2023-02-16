import React from 'react'

export const Button = ({button,textButton,eventButton}) => {
  return (
    <button id={button} onClick={eventButton}>{textButton}</button>
  )
}
