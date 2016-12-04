import React from 'react'

import Session from '../components/Session'
import SessionList from '../components/SessionList'

import sessions from '../data/sessions/'

const Sessions = ({url}) => {
  const date = url.query.date
  if (!date) return <SessionList sessions={sessions} />

  const session = {
    date,
    agenda: sessions[date].agenda
  }

  return <Session {...session} />
}

export default Sessions

