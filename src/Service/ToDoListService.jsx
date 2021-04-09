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
}

export const toDoListService = new ToDoListService()
