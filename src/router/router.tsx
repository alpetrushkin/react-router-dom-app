import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Posts, {postsLoader} from "../pages/Posts";
import SinglePost, {singlePostLoader} from "../pages/SinglePost";
import AddPost, {addPostAction} from "../pages/AddPost";
import {createBrowserRouter} from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'posts',
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: 'posts/:id',
        element: <SinglePost />,
        loader: singlePostLoader,
      },
      {
        path: 'add',
        element: <AddPost />,
        action: addPostAction,
      },
    ]
  }
])