
import {combineReducers} from 'redux';
import {gioHangReducer} from './GioHangReducer.jsx'
import {chiTietReducer} from './ChiTietReducer.jsx'

export const rootReducer = combineReducers({

    GioHangReducer: gioHangReducer, 
    ChiTietReducer: chiTietReducer,

})
