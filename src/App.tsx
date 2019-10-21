import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store'

import { Incrementor } from './components/Incrementor'
import { FormikForm } from './components/FormikForm'

import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
    return (
        <Provider store={store}>
            <CssBaseline />
            <div className="app">
                <Incrementor />
                <FormikForm />
            </div>
        </Provider>
    )
}

export default App
