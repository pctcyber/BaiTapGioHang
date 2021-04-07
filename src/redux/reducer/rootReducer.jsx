import {combineReducers} from 'redux';
import {gioHangReducer} from './GioHangReducer.jsx'
import {chiTietReducer} from './ChiTietReducer.jsx'
import {taiXiuReducer} from './TaiXiuReducer.jsx'
import {GameOanTuTi} from './GameOanTuTi'
import {ToDoListReducer} from './ToDoListReducer'

export const rootReducer = combineReducers({

    GioHangReducer: gioHangReducer, 
    ChiTietReducer: chiTietReducer,
    TaiXiuReducer: taiXiuReducer,
    GameOanTuTi: GameOanTuTi,
    ToDoListReducer,
})
