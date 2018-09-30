import { ADD_CUSTOMER, ADD_CUSTOMER_FAIL } from "../action/CustomerAction";

const initalSate = [];

export default (state = initalSate, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return [
                ...state.slice(),
                action.customer
            ]
        default:
            return state
    }
}