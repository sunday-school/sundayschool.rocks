import React from 'react'
import style from 'next/css'

const styles = {
  iframe: style({
    border: 0
  })
}

const Map = ({location}) =>
  <iframe
    className={styles.iframe}
    width='600'
    height='450'
    frameborder='0'
    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA1KdSgHcworDOmYrubo8zti_e-X4_7ZFU&q=${location.replace(/ /g, '+')}`}
    allowfullscreen
  />

export default Map

