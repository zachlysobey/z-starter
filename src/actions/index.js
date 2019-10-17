import { createAction } from 'redux-starter-kit'

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

export const actions = {
    increment,
    decrement,
}
