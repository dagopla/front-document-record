import { createBrowserRouter, Navigate,  RouterProvider } from "react-router-dom";
import { Configuration } from "../pages/configuration/Configuration";

import {  FormRegisterDb } from '../pages/formUseFormik/FormRegisterDb';

export const Navigation = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <FormRegisterDb/>,
      },
      {
        path: "/config",
        element: <Configuration/>,
      },{
        path:"/*",
        element:<Navigate to="/" />
      }
    ]);
    return <>
      <RouterProvider router={router} />
      
    </>
     
    
      
    
}