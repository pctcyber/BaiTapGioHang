
// cách 1: import có * as là import nguyên file đó
import { all } from '@redux-saga/core/effects'
// import * as ToDoListSaga from './ToDoListSaga'
// cách 2: import từng cái export trong file đó
import  {theoDoiActionGetTaskApi} from './ToDoListSaga'


export function* rootSaga() {

    // yield all: nhận vào 1 mảng các saga, và chạy nhiều saga cùng lúc
    yield all([

        // nghiệp vụ theo dõi action saga ToDoList
        theoDoiActionGetTaskApi()

        // các nghiệp vụ khác...

    ])

}