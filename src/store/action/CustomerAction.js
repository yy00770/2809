// export const ADD_CUSTOMER_STARTER = "ADD_CUSTOMER_STARTER";
// export const ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS";
export const ADD_CUSTOMER_FAIL = "ADD_CUSTOMER_FAIL";
export const ADD_CUSTOMER = 'ADD_CUSTOMER';

// export const addCustomer = async dispatch => {
//     dispatch 
// }

export const addCustomer = customer => async dispatch => {
    try {
        dispatch({
            type: ADD_CUSTOMER,
            customer: customer
        })
    }
    catch (err) {
        dispatch({
            type: ADD_CUSTOMER_FAIL
        })
    }
}