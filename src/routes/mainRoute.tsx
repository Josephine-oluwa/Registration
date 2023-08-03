import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/register'
import SignIn from '../pages/SignIn'
import PrivateRoute from './PrivateRoute'
import Layout from '../components/common/Layout'
import ViewAuthor from '../pages/screen/ViewAuthor'
import CreateArticle from '../pages/screen/CreateArticle'


export const mainRouter = createBrowserRouter([
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/",
        element: <PrivateRoute>
            <Layout />
        </PrivateRoute>,
        children: [
          
            {
                index: true,
                path: "/create-article",
                element: <CreateArticle />,
            },
            {
                index: true,
                path: "/view-authors",
                element: <ViewAuthor />,
            }
        ]
    }
])