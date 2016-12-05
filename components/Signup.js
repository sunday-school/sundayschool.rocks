import React from 'react'

const openWindow = () => {
  window.open('https://tinyletter.com/sundayschool', 'popupwindow', 'scrollbars=yes,width=800,height=600')
  return true
}

const Signup = () =>
  <form
    className='pa2 mw5 mv2 f6 lh-copy bg-light-pink purple'
    action='https://tinyletter.com/sundayschool'
    method='post'
    target='popupwindow'
    onSubmit={openWindow}
  >
    <p>
      <label htmlFor='tlemail'>Enter your email address and I'll let you know when we meet up.</label>
    </p>
    <p>
      <input type='text' className='w-100' name='email' id='tlemail' />
    </p>
    <input type='hidden' value='1' name='embed' />
    <input type='submit' className='w-100' value='Subscribe' />
    <p>
      <a className='dark-blue' href='https://tinyletter.com' target='_blank'>
        powered by TinyLetter
      </a>
    </p>
  </form>

export default Signup

