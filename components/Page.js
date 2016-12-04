import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Page = ({title, children, noHeader}) =>
  <section className='mw7 center'>
    <Head>
      <title>{title}</title>
      <link rel='stylesheet' href='https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css' />
    </Head>
    { noHeader
      ? null
      : <Header>{title}</Header>
    }
    {children}
    <Footer />
  </section>

export default Page

