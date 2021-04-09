import axios from "axios"
import { DOMAIN } from "../util/constants/settingSystem"

class ToDoListService {
    constructor() {

    }
    GetTaskApi = () => {
        return axios({
            method: 'GET',
            url: `${DOMAIN}/api/ToDoList/GetAllTask`

        })
    }


    AddTaskApi = (taskName) => {
        return axios({
            method:'POST',
            url:`${DOMAIN}/api/ToDoList/AddTask`,
            data: {
                taskName
            }
        })
    }

    DeletedTaskApi = (taskName) => {
        return axios({
            method:'DELETE',
            url:`${DOMAIN}/api/ToDoList/deleteTask?taskName=${taskName}`
        })
    }

    DoneTaskApi = (taskName) => {
        console.log(taskName);
        return axios({
            method:'PUT',
            url:`${DOMAIN}/api/ToDoList/doneTask?taskName=${taskName}`
        })
    }

    RejectTask = (taskName) => {
        
        return axios({
            method:'PUT',
            url:`${DOMAIN}/api/ToDoList/rejectTask?taskName=${taskName}`
        })
    }


}

export const toDoListService = new ToDoListService()
