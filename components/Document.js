import React from 'react'

import MD from './MD'
import Header from './Header'

const Document = (document) =>
  <div>
    <Header>{document.title}</Header>
    {MD(document.body)}
  </div>

export default Document

