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
}

export const toDoListService = new ToDoListService()
