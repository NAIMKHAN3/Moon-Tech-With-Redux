import { addProduct } from "../ActionCreators"

const addProductData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/addproduct", {
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
        console.log(data)
    }
}

export default addProductData;