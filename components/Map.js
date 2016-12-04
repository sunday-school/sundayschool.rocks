import React from 'react'
import style from 'next/css'

const Map = ({location}) =>
  <iframe
    className='ba0 w-100 h5'
    frameBorder='0'
    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA1KdSgHcworDOmYrubo8zti_e-X4_7ZFU&q=${location.replace(/ /g, '+')}`}
    allowFullScreen
  />

export default Map

