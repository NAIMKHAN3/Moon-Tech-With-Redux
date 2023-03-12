import { createBrowserRouter } from 'react-router-dom'
import Deshboard from '../layout/Deshboard/Deshboard'
import Main from '../layout/Main'
import About from '../Pages/About'
import AddProduct from '../Pages/AddProduct'
import Card from '../Pages/Card'
import Home from '../Pages/Home'
import ProductList from '../Pages/ProductList'
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
    },
    {
        path: '/deshboard', element: <Deshboard></Deshboard>, children: [
            {
                path: '/deshboard', element: <ProductList></ProductList>
            },
            {
                path: '/deshboard/add-product', element: <AddProduct></AddProduct>
            },
        ]
    }
])