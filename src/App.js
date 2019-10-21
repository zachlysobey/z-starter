import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store'

import { Incrementor } from './components/Incrementor'

import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
    return (
        <Provider store={store}>
            <CssBaseline />
            <div className="app">
                <Incrementor />
            </div>
        </Provider>
    )
}

export default App
