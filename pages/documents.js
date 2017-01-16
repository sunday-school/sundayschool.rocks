import React from 'react'

import Page from '../components/Page'
import Document from '../components/Document'
import DocumentList from '../components/DocumentList'

import documents from '../data/documents/'

const Documents = ({url}) => {
  const slug = url.query.doc
  if (!slug) {
    return (
      <Page title='All Documents'>
        <DocumentList documents={documents} />
      </Page>
    )
  }

  const document = documents[slug]

  return (
    <Page title={document.title} noHeader>
      <Document {...document} />
    </Page>
  )
}

export default Documents

