import { GET_TASK_LIST } from "../setting"

const stateDefault = {
    taskList: [],
}

export const ToDoListReducer = (state = stateDefault, action) => {
    switch (action.type) {

    case GET_TASK_LIST:{
        state.taskList = action.data
        return { ...state}
    }

    default:
        return {...state}
    }
}
