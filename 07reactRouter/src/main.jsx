import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout'
import Home from "./components/Home/Home.jsx"
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/user/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path:"About",
        element: <About/>
      },
      {
        path:"Contact",
        element: <Contact/>
      },
      {
         path: "User/:userId",
         element: <User/>
      },
      {
        path: "GitHub",
        element: <GitHub/>
      }
    
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
