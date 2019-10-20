import { createReducer } from 'redux-starter-kit'

import { actions } from '../actions'

export const rootReducer = createReducer(0, {
    [actions.increment.type]: state => state + 1,
    [actions.decrement.type]: state => state - 1,
})
