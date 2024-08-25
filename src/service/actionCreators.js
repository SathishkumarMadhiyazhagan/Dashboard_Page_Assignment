import axios from "axios"
import { FETCH_DATA_FAILED, FETCH_DATA_PENDING, FETCH_DATA_SUCCESS } from "../utils/ConstantValues.js"

export const fetchDataFromServer = () => async(dispatch) => {
    dispatch({
        type: FETCH_DATA_PENDING,
        payload: {
            loading: true
        }
    })

    try {
        var response = await axios.get(`${process.env.SERVER_URL}/data`);
        var data = response.data;
        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: {
                data: data,
            }
        })
    } catch(error) {
        dispatch({
            type: FETCH_DATA_FAILED,
            payload: {
                error: error.message
            }
        })
    }
}