import React from 'react'
import Link from 'next/link'

const Nav = () =>
  <nav>
    <ol>
      {
        [
          ['/', 'Home'],
          ['/sessions', 'Sessions']
        ].map(([url, title]) => (
          <li key={title}>
            <Link href={url}><a>{title}</a></Link>
          </li>
        ))
      }
    </ol>
  </nav>

export default Nav

