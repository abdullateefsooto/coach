import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/style/App.css'
import { About, Github, Home, HomeLayOut, MyContact, Resume } from './pages'


const router =  createBrowserRouter([
  {
    path:'/',
    element: <HomeLayOut />,
    children: [

      {
      index: true,
      element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <MyContact />
      },
      {
        path: "github",
        element: <Github />
      },
      {
        path: "resume",
        element: <Resume />
      },
    ]
  }
])

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
