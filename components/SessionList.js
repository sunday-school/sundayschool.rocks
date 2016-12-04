import React from 'react'
import Link from 'next/link'

import Page from './Page'

const SessionList = ({sessions}) =>
  <Page title='All Sessions'>
    <ul>
      {
        Object.keys(sessions)
          .sort()
          .reverse()
          .map(date => (
            <li>
              <Link href={`sessions?date=${date}`}><a>{date}</a></Link>
            </li>
          ))
      }
    </ul>
  </Page>

export default SessionList

