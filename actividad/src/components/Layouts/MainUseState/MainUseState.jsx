import React from 'react'
import { Button } from '../../UI/Button/Button'
import { useState } from 'react'

export const MainUseState = () => {

    const [counter, setCounter] = useState(0)

    const buttonAdd = ()=>{
        setCounter(counter+1)
    }

    const buttonReset = ()=>{
        setCounter(0)
    }

    const buttonSubstract = ()=>{
        setCounter(counter-1)
    }

  return (
    <main id='UseState'>
        <h2 id='counter'>{counter}</h2>
        
        <div id='Containerbtn'>

        <Button
        button = "button"
        textButton = "ADD"
        eventButton = {buttonAdd}
        />

        <Button
            button = "button"
            textButton = "RESET"
            eventButton = {buttonReset}
            />

        <Button
            button = "button"
            textButton = "SUBSTRACT"
            eventButton = {buttonSubstract}
        />
        
        </div>
    </main>
  )
}
