import { combineReducers } from "redux";
import mainReducer from "./main-reducer";
import wishlistReducer from './wishlist'

const rootReducer = combineReducers({
    login: mainReducer,
    like: wishlistReducer

})
export default rootReducer 