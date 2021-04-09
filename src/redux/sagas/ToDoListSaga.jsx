import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { toDoListService } from '../../Service/ToDoListService'
import { GET_TASK_LIST } from '../setting'

function* getTaskListApiAction(action) {
   

    // yield put({
    //     type: 'DISPLAY_LOADING'
    // })
    yield delay(1000)

    // call sẽ nhận vào 1 hàm mà trong hàm đó trả về 1 promise
    try {
        
        let {data,status} = yield call(toDoListService.GetTaskApi)
        
        // sau khi lấy giá trị thành công dùng put giống dispacth trong redux-thunk
        yield put({
            type: GET_TASK_LIST,    
            data
        })
        
    }
    catch (err){
        console.log(err.response);
    }
    // yield delay(5000)
    
    yield put({
        type:'HIDDEN_LOADING'
    })
}

export function * theoDoiActionGetTaskApi(){

    yield takeLatest('getTaskListApiAction',getTaskListApiAction)

}