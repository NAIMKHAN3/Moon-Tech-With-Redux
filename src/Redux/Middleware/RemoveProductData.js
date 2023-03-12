import { removeProduct } from "../ActionCreators"

const removeProductData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://moon-tech-server-pied.vercel.app/deleteproduct/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await res.json()
        if (data.acknowledged) {
            dispatch(removeProduct(id))
        }
    }
}

export default removeProductData