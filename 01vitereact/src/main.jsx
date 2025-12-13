import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function Myapp(){
  return(
    <div>
      <h1>
        Okay I think I am learning !!
      </h1>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
    <Myapp />
  </StrictMode>,
)
