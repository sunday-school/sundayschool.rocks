import React from 'react'
import Nav from './Nav'

const Header = ({title}) =>
  <header>
    <h1>{title}</h1>
    <Nav />
  </header>

export default Header

