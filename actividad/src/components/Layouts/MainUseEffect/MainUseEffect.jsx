import React, { useRef } from 'react'

export const MainUseEffect = () => {

  const Color = useRef()

  const colorChange = (event)=>{
    Color.current.style.backgroundColor = event.target.value
    console.log(event.target.value);
  }

  return (
    <main id="useEffect">

      <section id="changerColor" ref={Color}>

      </section>

      <input onChange={colorChange} type="color" name="" />

    </main>
  )
}
