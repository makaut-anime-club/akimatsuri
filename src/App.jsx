
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import About from './components/About';
import Events from './components/Events';
import Home from './components/Home';
import Stall from './components/Stall';
import RootLayout from './pages/Root';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Home />,
      children: [
        {index: true, element: <Home />},
        {path: '/about', element: <About/>},
        {path: '/events', element: <Events/>},
        {path: '/stalls', element: <Stall />}
      ]
    }
  ]
)

function App() {
  return <RouterProvider router={router}/>

}

export default App
