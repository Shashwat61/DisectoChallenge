import {FETCH_PRODUCTBY_ID_FAILED, FETCH_PRODUCTBY_ID_REQUEST, FETCH_PRODUCTBY_ID_SUCCESS} from '../actionTypes'

export const productById=(state={product:[], loading:false, error:''},action)=>{
    const {payload, type}=action
    switch(type){
        case FETCH_PRODUCTBY_ID_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_PRODUCTBY_ID_SUCCESS:
            return {
                ...state,
                product:payload,
                loading:false,
                error:''
            }
        case FETCH_PRODUCTBY_ID_FAILED:
            return {
                ...state,
                loading:false,
                error:payload
            }
        default: return state
    }
} 