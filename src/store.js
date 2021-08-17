import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {restaurantListReducer,restaurantDetailsReducer} from './reducers/restaurantReducer'

const reducers= combineReducers({
    restaurantList : restaurantListReducer,
    restaurantDetailsList: restaurantDetailsReducer
})

const initialState={}

const middleware = [thunk]
const store= createStore(reducers,initialState,applyMiddleware(...middleware));

export default store