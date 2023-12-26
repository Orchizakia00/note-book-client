import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddNotes from "../pages/AddNotes/AddNotes";
import EditNotes from "../pages/EditNotes/EditNotes";
  
  
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
        {
            path: '/edit-notes/:id',
            element: <EditNotes />,
            loader: ({params}) => fetch(`http://localhost:5000/notes/${params.id}`)
        },
      ]
    },
  ]);

  export default router;