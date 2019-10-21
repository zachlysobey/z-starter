import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../actions'
import LeftArrow from '@material-ui/icons/ArrowLeftOutlined'
import RightArrow from '@material-ui/icons/ArrowRightOutlined'

function UnconnectedIncrementor({ value, increment, decrement }) {
    return (
        <>
            <h1>Hello, Redux!</h1>

            <button onClick={decrement}>
                <LeftArrow />
            </button>

            <span style={{ fontSize: '2em' }}> {value} </span>

            <button onClick={increment}>
                <RightArrow />
            </button>
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
