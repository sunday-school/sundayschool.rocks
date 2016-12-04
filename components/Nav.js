import React from 'react'
import Link from 'next/link'

const pages = [
  ['/', 'Home'],
  ['/sessions', 'Sessions']
]

const Nav = () =>
  <nav>
    <ol className='list pl0'>
      {
        pages.map(([url, title]) => (
          <li key={title}>
            <Link href={url}><a>{title}</a></Link>
          </li>
        ))
      }
    </ol>
    <hr />
  </nav>

export default Nav

