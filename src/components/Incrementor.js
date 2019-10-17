import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../actions'

function UnconnectedIncrementor({ value, increment, decrement }) {
    return (
        <>
            <h1>Hello, Redux!</h1>
            <button onClick={decrement}>-</button>
            {value}
            <button onClick={increment}>+</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        value: state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(actions.increment()),
        decrement: () => dispatch(actions.decrement()),
    }
}

export const Incrementor = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UnconnectedIncrementor)
