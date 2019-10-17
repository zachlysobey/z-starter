import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store'

import { Incrementor } from './components/Incrementor'

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Incrementor />
            </div>
        </Provider>
    )
}

export default App
