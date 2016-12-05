import React from 'react'
import Link from 'next/link'
import style from 'next/css'

const styles = style({
  marginTop: -15
})

const Church = () =>
  <div>
    <Link href='/'>
      <a>
        <svg
          className={`w3 ${styles}`}
          stroke='#D5008F'
          fill='#D5008F'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          version='1.1'
          x='0px' y='0px'
          viewBox='0 0 100 100'
          enableBackground='new 0 0 100 100'
          xmlSpace='preserve'
        >
          <path d='M78.177,86.529v-7.494h-6.328V48.231l4.448,5.071l3.007-2.638L52.001,19.538v-7.276h5.111v-4h-5.111V1.977h-4v6.285H42.89v4  h5.111v7.236L20.698,50.622l3.007,2.638l4.446-5.069v30.844h-6.328v7.494h-4.135v11.494h64.623V86.529H78.177z M32.151,43.631  l17.816-20.31h0.031l17.85,20.35v35.364h-7.414V46.483L50.001,34.989L39.565,46.483v32.552h-7.414V43.631z M56.435,79.035H43.565  V48.028l6.436-7.088l6.434,7.088V79.035z M25.823,83.035h48.354v3.494H25.823V83.035z M78.312,94.023H21.688v-3.494h56.623V94.023z' />
        </svg>
      </a>
    </Link>
  </div>

export default Church

