import {SUBMIT_REVIEW} from '../actionTypes'

const initialState={
    
    reviewList:[
    {
     id:'1',
     reviews:[]
    },
    {
        id:'2',
        reviews:[]
    },
    {
        id:'3',
        reviews:[]
    },
    {
        id:'4',
        reviews:[]
    },
    {
        id:'5',
        reviews:[]
    },
    {
        id:'6',
        reviews:[]
    },
    {
        id:'7',
        reviews:[]
    },
    {
        id:'8',
        reviews:[]
    },
    {
        id:'9',
        reviews:[]
    },
    {
        id:'10',
        reviews:[]
    },
    {
        id:'11',
        reviews:[]
    },
    {
        id:'12',
        reviews:[]
    },
    {
        id:'13',
        reviews:[]
    },
    {
        id:'14',
        reviews:[]
    },
    {
        id:'15',
        reviews:[]
    },
    {
        id:'16',
        reviews:[]
    },
    {
        id:'17',
        reviews:[]
    },
    {
        id:'18',
        reviews:[]
    },
    {
        id:'19',
        reviews:[]
    },
    {
        id:'20',
        reviews:[]
    }


]
}


export const addReviewReducer=(state=initialState,action)=>{
    const {payload, type}=action
    switch(type){
        case SUBMIT_REVIEW:
            // const toChange=initialState.reviewList.find(item=>item.id===payload.id)
            const newState=initialState
            const toChange=newState.reviewList.find(item=>item.id===payload.id)
            toChange.reviews.push(payload.review)
            console.log(newState)




            const list=[]
            // const toChange=state.find(review=>review.id===payload.id)
            // toChange.reviews.push(payload.review)
            // console.log(toChange)
            return {
                ...state,
                reviewList:newState.reviewList
            }
        default: return state
    }

}