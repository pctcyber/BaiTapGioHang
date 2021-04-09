import axios from 'axios'
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { toDoListService } from '../../Service/ToDoListService'
import { GET_TASK_LIST, GET_TASK_LIST_API_ACTION, HIDDEN_LOADING, ADD_TASK_LIST_API_ACTION, DELETED_TASK_LIST_API_ACTION, DONE_TASK_LIST_API_ACTION, REJECT_TASK_LIST_API_ACTION } from '../setting'

function* getTaskListApiAction(action) {
    // console.log(action);
    yield put({
        type: 'DISPLAY_LOADING'
    })
    yield delay(1000)

    // call sẽ nhận vào 1 hàm mà trong hàm đó trả về 1 promise
    try {
        let { data, status } = yield call(toDoListService.GetTaskApi)
        // sau khi lấy giá trị thành công dùng put giống dispacth trong redux-thunk
        yield put({
            type: GET_TASK_LIST,
            data
        })
    }
    catch (err) {
        console.log(err.response);
    }
    // yield delay(5000)
    yield put({
        type: HIDDEN_LOADING
    })
}

export function* theoDoiActionGetTaskApi() {

    yield takeLatest(GET_TASK_LIST_API_ACTION, getTaskListApiAction)

}

//==> nghiệp vụ addTask

function* addTaskApiAction(action) {
    let { value } = action;
    try {

        let { data, status } = yield call(() => {
            return toDoListService.AddTaskApi(value)
        })

        // console.log(status);
        if (status === 200) {
            yield put({
                type: GET_TASK_LIST_API_ACTION
            })
        }
        // nếu muốn put lại function gettasklistapi giống thunk thì pải làm sao
    }
    catch (err) {
        console.log(err.response);
    }
}

export function* theoDoiActionAddTaskApi() {

    yield takeLatest(ADD_TASK_LIST_API_ACTION, addTaskApiAction)
}

// ==> nghiệp vụ deleteTask

function* deletedTask(action) {
    try {
        let { taskName } = action;
        yield call(() => {
            return toDoListService.DeletedTaskApi(taskName)
        })
        yield put({
            type: GET_TASK_LIST_API_ACTION
        })
       
    } catch (error) {
        console.log(error.response);
    }
}

export function* theoDoiActionDeletedTask() {

    yield takeLatest(DELETED_TASK_LIST_API_ACTION, deletedTask)
}


// ==> nghiệp vụ doneTask

function* doneTask(action) {
    console.log(action);
    let { taskName } = action;
    console.log(taskName);
    try {

        yield call(() => {
            toDoListService.DoneTaskApi(taskName)
        })

        yield put({
            type: GET_TASK_LIST_API_ACTION
        })

    }
    catch (error) {
        console.log(error);
    }
}

export function* theoDoiActionDoneTask() {
    yield takeLatest(DONE_TASK_LIST_API_ACTION, doneTask)
}

// ==> nghiệp vụ rejectTask
function* rejectTask(action) {

    let { taskName } = action;
    try {

        yield call(() => {
            return toDoListService.RejectTask(taskName)
        })
        yield put({
            type: GET_TASK_LIST_API_ACTION
        })
    } catch (error) {

        console.log(error);
    }

}

export function* theoDoiActionRejectTask() {
    yield takeLatest(REJECT_TASK_LIST_API_ACTION, rejectTask)
}