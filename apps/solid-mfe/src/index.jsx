/* @refresh reload */
import { render } from 'solid-js/web'
import App from './App'

import './index.css'
import 'styles/globals.css'
import 'styles/theme.css'

const root = document.getElementById('root')

render(() => <App />, root)
