import R from 'ramda'
import React from 'react'
import Link from 'next/link'

import ReversibleList from './ReversibleList'
import Page from './Page'

const listItem = date =>
  <li key={date}>
    <Link href={`sessions?date=${date}`}><a>{date}</a></Link>
  </li>

const listSessions = R.pipe(
  R.keys,
  R.invoker(0, 'sort'),
  R.map(listItem)
)

const SessionList = ({sessions}) =>
  <Page title='All Sessions'>
    <ReversibleList>
      {listSessions(sessions)}
    </ReversibleList>
  </Page>

export default SessionList

