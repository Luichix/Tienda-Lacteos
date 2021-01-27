import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './scss/styles.scss'
import reducer, { initialState } from './redux/reducer'
import { StateProvider } from './redux/StateProvider'

ReactDOM.render (
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>,
    window.document.getElementById('app')
)