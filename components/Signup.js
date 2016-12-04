import React from 'react'
import style from 'next/css'

const openWindow = () => {
  window.open('https://tinyletter.com/sundayschool', 'popupwindow', 'scrollbars=yes,width=800,height=600')
  return true
}

const styles = {
  form: style({
    border: '1px solid #ccc',
    padding: 3
  }),
  input: style({
    width: 140
  })
}

const Signup = ({className}) =>
  <form
    className={styles.form}
    action='https://tinyletter.com/sundayschool'
    method='post'
    target='popupwindow'
    onSubmit={openWindow}
  >
    <p>
      <label for='tlemail'>Enter your email address and I'll email you when we meet up.</label>
    </p>
    <p>
      <input type='text' className={styles.input} name='email' id='tlemail' />
    </p>
    <input type='hidden' value='1' name='embed' />
    <input type='submit' value='Subscribe' />
    <p>
      <a href='https://tinyletter.com' target='_blank'>
        powered by TinyLetter
      </a>
    </p>
  </form>

export default Signup

