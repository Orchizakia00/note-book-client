import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddNotes from "../pages/AddNotes/AddNotes";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/add-notes',
            element: <AddNotes />
        },
      ]
    },
  ]);

  export default router;