import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"
import Root from './Components/Root';
import Home from './Components/Home';
import Donation from './Components/Donation';
import Statistics from './Components/Statistics';
import Donationdetails from './Components/Donationdetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/card.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/donationdetails",
        element: <Donationdetails></Donationdetails>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
