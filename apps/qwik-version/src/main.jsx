import '@builder.io/qwik/qwikloader.js'

import { render } from '@builder.io/qwik'
import { App } from './app.jsx'
import './index.css'
import 'styles/globals.css'
import 'styles/theme.css'

render(document.getElementById('app'), <App />)
