import React from 'react'
import Nav from './Nav'
import Church from './Church'

const Header = ({children}) =>
  <header className='bb cf mb3'>
    <div className='fl w-10'>
      <Church />
    </div>
    <div className='fl w-60'>
      <h1 className='pa0 ma0'>{children}</h1>
    </div>
    <div className='fl w-30'>
      <Nav />
    </div>
  </header>

export default Header

