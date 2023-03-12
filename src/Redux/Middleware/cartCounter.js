import { ADD_TO_CARD } from "../ActionTypes";

const cartCounter = (store) => (next) => (action) => {
    const state = store.getState();
    const card = state.product.card;
    if (action.type === ADD_TO_CARD) {
        const newAction = {
            ...action,
            payload: { ...action.payload, cardPosition: card.length }
        }
        return next(newAction)
    }
    return next(action);
}

export default cartCounter;