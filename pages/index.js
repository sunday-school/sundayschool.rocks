import React from 'react'

import Page from '../components/Page'
import Signup from '../components/Signup'
import Map from '../components/Map'
import MD from '../components/MD'

const body = MD(`
I like to make art with tech and the web.

Maybe you have a cool project idea but you don't know how to get
started. Maybe you have some cool tricks you wanna show off. Maybe you
just wanna kick it.

Stop by at 2pm this Sunday!

We call it "Sunday School"

1936 W. Division St.
Floor 2: The Uprising Creative
`)

export default () =>
  <Page title='Sunday School'>
    {body}
    <Signup />
    <Map location={'The Uprising Creative, Chicago IL'} />
  </Page>
