import axios from "axios"
import { GET_TASK_LIST } from "../setting"

export const getTaskListAction = () => {
    return async dispatch => {

        try {

            // nhớ bóc tách tại đây thay vì code  ==> let promise =  await axios({....})
            let { data, status } = await axios({
                method: 'GET',
                url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask'
            })

            if (status === 200) {

                dispatch({
                    type: GET_TASK_LIST,
                    data
                })

            }

        } catch (error) {
            console.log(error.response.data.Message);
        }
        // promise.then((res) => {
        //     dispatch({
        //         type: GET_TASK_LIST,
        //         data: res.data
        //     })
        // })

        // promise.catch((err) => {
        //     console.log('that bai');
        //     console.log(err.response.data)
        // })


    }
}

export const addTaskAction = (taskName) => {

    return dispatch => {
        let promise = axios({
            method: 'POST',
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            data: {
                taskName
            }
        })

        promise.then(() => {

            dispatch(getTaskListAction())
            alert('success')
        })
        promise.catch((err) => {
            alert(err.response.data)
        })

    }

}


export const deleteTaskAction = (taskName) => {

    return dispatch => {

        let promise = axios({
            method: 'DELETE',
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`
        })

        promise.then((res) => {

            dispatch(getTaskListAction())
            alert(res.data)
        })

        promise.catch((err) => {
            alert(err.response.data)
        })
    }

}


export const taskRejectAction = (taskName) => {
    return dispatch => {

        let promise = axios({
            method: 'PUT',
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`
        })

        promise.then((res) => {
            alert(res.data);
            dispatch(getTaskListAction())
        })

        promise.catch((err) => {
            alert(err.respone.data)
        })

    }

}

export const taskDoneAction = taskName => {

    return async dispatch => {
        let promise = await axios({
            method: "PUT",
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`
        })

        dispatch(getTaskListAction())

    }
}