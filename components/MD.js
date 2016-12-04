import React from 'react'
import ReactMarkdown from 'react-markdown'

const MD = string => <ReactMarkdown className='measure' source={string} />

export default MD

