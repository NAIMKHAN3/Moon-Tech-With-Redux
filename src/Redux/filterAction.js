import { TOOGLE_BRAND } from "./ActionTypes"

export const toggleBrand = (brandName) => {
    return {
        type: TOOGLE_BRAND,
        payload: brandName
    }

}