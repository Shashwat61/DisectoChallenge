import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productsReducer} from './reducers/products.reducer'
import { productById } from './reducers/singleproduct.reducer'
import { addReviewReducer } from './reducers/addreview.reducer'
const rootReducer = combineReducers({
    // reducers
    productsList:productsReducer,
    singleProduct:productById,
    reviews:addReviewReducer,
})

const store=createStore(rootReducer,{}, composeWithDevTools(applyMiddleware(thunk)))
export default store