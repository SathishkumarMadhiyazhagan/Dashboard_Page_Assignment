import { FETCH_DATA_FAILED, FETCH_DATA_PENDING, FETCH_DATA_SUCCESS } from '../../utils/ConstantValues.js';

const initialstate = {
    data:{},
    loading: false,
    error:''
}


export const DashboardReducer = (state = initialstate, action) => {
    const {type, payload} = action;

    switch(type) {
        case FETCH_DATA_PENDING:
            return {...state, loading: true}
        case FETCH_DATA_SUCCESS:
            return {...state, data:payload.data, loading: false}
        case FETCH_DATA_FAILED:
            return {...state, data:[], loading: false, error:payload.error}
        default:
            return state;
    }
 
}
