import { createRoot } from 'react-dom/client'
//first import bootstrap.css
import 'bootstrap/dist/css/bootstrap.min.css'
//then your own css to override bootstrap.css
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
