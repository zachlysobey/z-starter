import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../actions'

import Button from '@material-ui/core/Button'
import LeftArrow from '@material-ui/icons/ArrowLeftOutlined'
import RightArrow from '@material-ui/icons/ArrowRightOutlined'

function UnconnectedIncrementor({ value, increment, decrement }) {
    return (
        <>
            <h1>Hello, Redux!</h1>

            <Button onClick={decrement} color="primary" variant="contained">
                <LeftArrow />
            </Button>

            <span style={{ fontSize: '2em' }}> {value} </span>

            <Button onClick={increment} color="primary" variant="contained">
                <RightArrow />
            </Button>
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
