/* eslint-disable camelcase */

import session_2017_01_08 from './2017_01_08.js'
import session_2016_12_18 from './2016_12_18.js'
import session_2016_12_04 from './2016_12_04.js'
import session_2016_10_23 from './2016_10_23.js'
import session_2016_11_06 from './2016_11_06.js'
import session_2016_11_13 from './2016_11_13.js'
import session_2016_11_20 from './2016_11_20.js'

const dateize = arr => {
  const obj = {}
  arr.forEach(session => {
    obj[session.date] = session
  })
  return obj
}

export default dateize([
  session_2016_10_23,
  session_2016_11_06,
  session_2016_11_13,
  session_2016_11_20,
  session_2016_12_04,
  session_2016_12_18,
  session_2017_01_08
])

