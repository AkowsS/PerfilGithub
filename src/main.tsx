import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {createBrowserRouter} from "react-router-dom"
import { HomePage } from './pages'

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
