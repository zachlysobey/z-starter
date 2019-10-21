import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store'

import Dashboard from './components/Dashboard'

import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
    return (
        <Provider store={store}>
            <CssBaseline />
            <div className="app">
                <Dashboard />
            </div>
        </Provider>
    )
}

export default App
