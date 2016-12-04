import React from 'react'
import Nav from './Nav'

const Header = ({children}) =>
  <header>
    <h1>{children}</h1>
    <Nav />
  </header>

export default Header

