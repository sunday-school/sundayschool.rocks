import React from 'react'

const SessionTitle = ({date, theme}) =>
  <span>
    <small>{date}</small>: {theme}
  </span>

export const txt = ({date, theme}) =>
  `${date}: ${theme}`

export default SessionTitle

