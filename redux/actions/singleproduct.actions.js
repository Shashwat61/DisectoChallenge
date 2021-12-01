import axios from 'axios';
import {FETCH_PRODUCTBY_ID_FAILED, FETCH_PRODUCTBY_ID_REQUEST, FETCH_PRODUCTBY_ID_SUCCESS} from '../actionTypes'

export const fetchProductById=(id)=>{
    return (dispatch)=>{
        dispatch({type:FETCH_PRODUCTBY_ID_REQUEST})
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((resp)=>{
            dispatch({type:FETCH_PRODUCTBY_ID_SUCCESS, payload:resp?.data})
        })
        .catch((err)=>{
            dispatch({type:FETCH_PRODUCTBY_ID_FAILED,payload:err.message})
        })
    }
}