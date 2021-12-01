import {SUBMIT_REVIEW} from '../actionTypes'

export const addReview = (id,review) => {
   return {
       type: SUBMIT_REVIEW,
       payload: {id,review}
   }
}