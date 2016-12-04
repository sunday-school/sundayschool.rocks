import R from 'ramda'
import React from 'react'
import Link from 'next/link'

import ReversibleList from './ReversibleList'

const SessionLink = ({date, theme}) =>
  <Link href={`sessions?date=${date}`}>
    <a><small>{date}:</small> <em>{theme}</em></a>
  </Link>

const SessionList = ({sessions}) => R.pipe(
  R.keys,
  R.invoker(0, 'sort'),
  R.map(key => sessions[key]),
  R.map(session => (
    <li key={session.date}>
      <SessionLink {...session} />
    </li>
  )),
  sessions => <ReversibleList>{sessions}</ReversibleList>
)(sessions)

export default SessionList

