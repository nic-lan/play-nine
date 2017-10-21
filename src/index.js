import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/css/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
