import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserContext from './Components/UserContext/UserContext.jsx';
import Login from './Components/Login/Login.jsx';
import SingUp from './Components/SingUp/SingUp.jsx';
import LayOut from './Components/Layout/LayOut.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import Home from './Components/Home/Home';
import Play from './Components/Play/Play';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/singUp",
        element:<SingUp></SingUp>,
      },
      {
        path: "/home",
        element:<PrivateRoute><Home></Home></PrivateRoute>,
      },
      // {
      //   path: "/",
      //   element:<PrivateRoute><Home></Home></PrivateRoute>,
      
      // },
      {
        path: "/play/:id",
        element: <Play></Play>
      }

    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
    <RouterProvider router={router} />

    </UserContext>
   


   
  </React.StrictMode>,
)
