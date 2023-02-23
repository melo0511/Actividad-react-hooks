import React from 'react'
import { Anchor } from '../Anchor/Anchor'

export const NavBar = () => {
  return (
    <nav>
        <Anchor  route="/" textAnchor={"Home"}/>
        <Anchor  route="/UseState" textAnchor={"UseState"}/>
        <Anchor  route="/UseCustom" textAnchor={"UseCustom"}/>
        <Anchor  route="/UseEffect" textAnchor={"UseEffect"}/>
        <Anchor  route="/" textAnchor={"Rick And Morty"}/>
    </nav>
  )
}
