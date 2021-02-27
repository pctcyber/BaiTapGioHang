import {combineReducers} from 'redux'
import {GioHangReducer} from './GioHangReducer.jsx'

// kho tong ung dung

export const rootReducer = combineReducers ({

    
    // noi chua cac reducer con cho moi nghiep vu
    GioHangReducer: GioHangReducer,

})