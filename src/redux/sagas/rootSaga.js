import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_TASK_LIST } from '../setting'

function* getTaskListApi(action) {
    // trường hợp 2
    // while(true){
    //     yield take('getTaskListApiAction') // theo dõi action, xem action nào dispatch mới làm các công việc bên dưới
    //     console.log('getTaskListApi');
    // }

    // trường hợp 1:
    // yield take('getTaskListApiAction')
    // console.log({action});

    // yield take('getTaskListApiAction')
    // console.log('getTask2');

    // trường hợp 3:
    // yield delay(3000)
    // console.log({action});

    let {data,status} = yield call(() => {
        return axios({
            method: 'GET',
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask'
        })
    })

    // console.log(data,status);
    // sau khi lấy giá trị thành công dùng put() ==> giống dispatch trong thunk

    yield put({
        type: GET_TASK_LIST,    
        data
    })

}

export function* rootSaga() {

    // trường hợp 1 + 2:
    // yield fork(getTaskListApi) // non blocking: chạy ko cần chờ
    // console.log('rootsaga');

    // trường hợp 3:
    // yield takeEvery('getTaskListApiAction',getTaskListApi)
    yield takeLatest('getTaskListApiAction',getTaskListApi)

}