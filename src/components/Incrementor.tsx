import React from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import LeftArrow from '@material-ui/icons/ArrowLeftOutlined'
import RightArrow from '@material-ui/icons/ArrowRightOutlined'

import { AppState } from '../store'
import { actions } from '../actions'
import { Dispatch } from 'redux'

interface IncrementorProps {
    value: number
    increment: (e: React.MouseEvent) => void
    decrement: (e: React.MouseEvent) => void
}
function UnconnectedIncrementor({
    value,
    increment,
    decrement,
}: IncrementorProps) {
    return (
        <>
            <h1>Hello, Redux!</h1>

            <Button onClick={decrement} color="primary" variant="contained">
                <LeftArrow />
            </Button>

            {value}

            <Button onClick={increment} color="primary" variant="contained">
                <RightArrow />
            </Button>
        </>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        value: state,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        increment: () => dispatch(actions.increment()),
        decrement: () => dispatch(actions.decrement()),
    }
}

export const Incrementor = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UnconnectedIncrementor)
