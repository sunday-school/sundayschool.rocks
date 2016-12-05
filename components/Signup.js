import React from 'react'

const openWindow = () => {
  window.open('https://tinyletter.com/sundayschool', 'popupwindow', 'scrollbars=yes,width=800,height=600')
  return true
}

const Signup = () =>
  <form
    className='ba bw2 ph2 mw5 mv3'
    action='https://tinyletter.com/sundayschool'
    method='post'
    target='popupwindow'
    onSubmit={openWindow}
  >
    <p>
      <label htmlFor='tlemail'>Enter your email address and I'll email you when we meet up.</label>
    </p>
    <p>
      <input type='text' className='w-100' name='email' id='tlemail' />
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

