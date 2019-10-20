import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store'

import { Incrementor } from './components/Incrementor'
import { FormikForm } from './components/FormikForm'

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Incrementor />
                <FormikForm />
            </div>
        </Provider>
    )
}

export default App
