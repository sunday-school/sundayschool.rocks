import React from 'react'
import Link from 'next/link'

const pages = [
  ['/', 'Home'],
  ['/sessions', 'Sessions'],
  ['/documents', 'Documents']
]

const Nav = () =>
  <nav>
    <ol className='list pa0 ma0 tr'>
      {
        pages.map(([url, title]) => (
          <li key={title}>
            <Link href={url}><a className='link'>{title}</a></Link>
          </li>
        ))
      }
    </ol>
  </nav>

export default Nav

