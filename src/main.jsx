import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Home } from './pages/components/Home.jsx'
import { About } from './pages/components/About.jsx'
import { Projects } from './pages/components/Projects.jsx'
import { Services } from './pages/components/Services.jsx'
import { Contact } from './pages/components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/legacy",
    element: <App></App>,
  },
  {
    path: "/about-me",
    element: <About></About>,
  },
  {
    path: "/projects",
    element: <Projects></Projects>,
  },
  {
    path: "/services",
    element: <Services></Services>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
