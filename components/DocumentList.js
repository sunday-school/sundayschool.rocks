import R from 'ramda'
import React from 'react'
import Link from 'next/link'

import ReversibleList from './ReversibleList'

const DocumentLink = ({slug, title}) =>
  <Link href={`documents?doc=${slug}`}>
    <a>{title}</a>
  </Link>

const DocumentList = ({documents}) => R.pipe(
  R.keys,
  R.invoker(0, 'sort'),
  R.map(key => documents[key]),
  R.filter(document => document.onList !== false),
  R.map(document => (
    <li key={document.slug}>
      <DocumentLink {...document} />
    </li>
  )),
  documents => <ReversibleList>{documents}</ReversibleList>
)(documents)

export default DocumentList

