import React from 'react'

import MD from './MD'
import Header from './Header'
import SessionTitle from './SessionTitle'

const Session = (session) =>
  <div>
    <Header><SessionTitle {...session} /></Header>
    <h2>Agenda</h2>
    {MD(session.agenda)}
  </div>

export default Session

