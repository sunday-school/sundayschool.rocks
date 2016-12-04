import React from 'react'

import Page from './Page'
import MD from './MD'

const Session = ({date, agenda}) =>
  <Page title={`Sunday School ${date}`}>
    {MD(agenda)}
  </Page>

export default Session

