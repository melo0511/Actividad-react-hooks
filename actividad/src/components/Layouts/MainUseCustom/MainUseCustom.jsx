import React, { useState } from 'react'
import { Button } from '../../UI/Button/Button'
import { Input } from '../../UI/Input/Input'

export const MainUseCustom = () => {

  const [textP, setText] = useState(" ")

  const buttonChange = ()=>{

    const inputT = document.getElementById("inputChange")

    setText(inputT.value)
  }

  return (
    <main id="UseCustom">

      <h2 id="TextInput">{textP}</h2>

      <Input 
        type="text"
        styleInput="inputChange"
      />

      <Button
        button="buttoCustom"
        textButton="CAMBIAR"
        eventButton={buttonChange}
      />

    </main>
  )
}
