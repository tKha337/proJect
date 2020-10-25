import { combineReducers } from 'redux'
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer'
import BaiTapDatVeReducer from './BaiTapDatVeReducer'
export const rootReducer = combineReducers({
    BaiTapOanTuXiReducer,
    BaiTapDatVeReducer
})