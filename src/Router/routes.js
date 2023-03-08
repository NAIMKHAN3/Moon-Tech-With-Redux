import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import About from '../Pages/About'
import Card from '../Pages/Card'
import Home from '../Pages/Home'
import TopRated from '../Pages/TopRated'
import Wishlist from '../Pages/Wishlist'

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/top-rated', element: <TopRated></TopRated>
            },
            {
                path: '/about', element: <About></About>
            },
            {
                path: '/card', element: <Card></Card>
            },
            {
                path: '/wishlist', element: <Wishlist></Wishlist>
            },
        ]
    }
])