import React from 'react'
import Head from 'next/head'
import style from 'next/css'

import Header from '../components/Header'
import Footer from '../components/Footer'

style.global('html, body', {
  backgroundColor: '#E8FDF5',
  color: '#5E2CA5'
})

const Page = ({title, children, noHeader}) =>
  <section className='mw7 center pa4 ba2 sans-serif'>
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

