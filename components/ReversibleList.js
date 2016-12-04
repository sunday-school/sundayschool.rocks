import React from 'react'
import R from 'ramda'
import { react } from 'crumbles'

const maybeReverse = down => down
  ? R.reverse
  : R.identity

const Switcher = ({down, toggle}) =>
  <span onClick={toggle}>
    {
      down
        ? '▼'
        : '▲'
    }
  </span>

const ReversibleList = ({children, state, setState}) => {
  const sort = maybeReverse(state.down)
  return (
    <div>
      <Switcher down={state.down} toggle={() => setState({down: !state.down})} />
      <ul className='list pl0'>
        {sort(React.Children.toArray(children))}
      </ul>
    </div>
  )
}

export default react.manageState({Component: ReversibleList, initialState: {down: true}})

