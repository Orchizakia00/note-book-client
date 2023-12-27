import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddNotes from "../pages/AddNotes/AddNotes";
import AllNotes from "../pages/AllNotes/AllNotes";
import EditNotes from "../pages/EditNotes/EditNotes";
import Home from "../pages/Home/Home";
  
  
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
            path: '/all-notes',
            element: <AllNotes />
        },
        {
            path: '/add-notes',
            element: <AddNotes />
        },
        {
            path: '/edit-notes/:id',
            element: <EditNotes />,
            loader: ({params}) => fetch(`https://note-book-server.vercel.app/notes/${params.id}`)
        },
      ]
    },
  ]);

  export default router;