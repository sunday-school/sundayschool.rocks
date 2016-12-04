import React from 'react'

import Page from '../components/Page'
import Session from '../components/Session'
import SessionList from '../components/SessionList'
import { txt as sessionTitle } from '../components/SessionTitle'

import sessions from '../data/sessions/'

const Sessions = ({url}) => {
  const date = url.query.date
  if (!date) {
    return (
      <Page title='All Sessions'>
        <SessionList sessions={sessions} />
      </Page>
    )
  }

  const session = sessions[date]

  return (
    <Page title={sessionTitle(session)} noHeader>
      <Session {...session} />
    </Page>
  )
}

export default Sessions

