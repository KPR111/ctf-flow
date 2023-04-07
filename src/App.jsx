import './App.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from 'components/Navbar/Navbar'

const Layout = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
]}]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
