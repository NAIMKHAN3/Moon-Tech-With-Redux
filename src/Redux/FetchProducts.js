import { loadProducts } from "./ActionCreators"

const fetchProducts = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://moon-tech-server-pied.vercel.app/products")
        const data = await res.json()
        console.log(data)
        if (data.length) {
            dispatch(loadProducts(data))
        }
    }
}

export default fetchProducts;