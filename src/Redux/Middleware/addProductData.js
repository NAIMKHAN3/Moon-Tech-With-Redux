import { addProduct } from "../ActionCreators"

const addProductData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch("https://moon-tech-server-pied.vercel.app/addproduct", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        const data = await res.json()
        if (data.acknowledged) {
            dispatch(addProduct({
                _id: data.insertedId,
                ...product,
            }))
        }
    }
}

export default addProductData;