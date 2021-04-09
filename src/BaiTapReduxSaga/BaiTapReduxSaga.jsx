import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TASK_LIST_API_ACTION, DELETED_TASK_LIST_API_ACTION, DONE_TASK_LIST_API_ACTION, GET_TASK_LIST_API_ACTION, REJECT_TASK_LIST_API_ACTION } from '../redux/setting';

export default function BaiTapReduxSaga() {

    const usedispatch = useDispatch()
    const { taskList } = useSelector(state => state.ToDoListReducer)
    const [state, setState] = useState({

        value: {
            taskName: ''
        },
        error: {
            taskName: ''
        }
    })

    const renderTaskCompleted = () => {
        return taskList.filter(task => task.status).map((task, index) => {
            return <li key={index}>
                {task.taskName}
                <i className="fa fa-trash-alt" style={{ cursor: 'pointer', marginLeft: 193, marginRight: 10 }} onClick={() => {
                    deletedTask(task.taskName)
                }}></i>
                <i className="fa fa-undo" style={{ cursor: 'pointer' }} onClick={() => {
                    taskReject(task.taskName)
                }}></i>
            </li>
        })
    }

    const renderTaskUncompleted = () => {
        return taskList.filter(task => !task.status).map((task, index) => {
            return <li key={index} style={{ justifyContent: 'normal', color: 'green' }}>
                {task.taskName}

                <i className="fa fa-trash-alt" style={{ cursor: 'pointer', marginLeft: 193, marginRight: 10 }} onClick={() => {
                    deletedTask(task.taskName)
                }}></i>
                <i className="fa fa-check" style={{ cursor: 'pointer' }} onClick={() => {
                    taskDone(task.taskName)
                }}></i>
            </li>
        })

    }
    const getTaskList = () => {
        usedispatch({
            type: GET_TASK_LIST_API_ACTION,

        })
    }

    useEffect(() => {
        getTaskList()
    }, [])

    const addTask = (event) => {
        event.preventDefault();
        usedispatch({
            type: ADD_TASK_LIST_API_ACTION,
            value: state.value.taskName
        })

    }

    const handleChange = (event) => {
        let { name, value } = event.target;
        // console.log(name,value);
        let newValue = { ...state.value };
        newValue = { ...newValue, [name]: value }


        let newError = { ...state.error };
        let regexString = /^[a-z A-Z]+$/;
        if (!regexString.test(value) || value.trim() === '') {

            newError[name] = value + ' invalid !';
        } else {
            newError[name] = '';
        }

        setState({
            ...state,
            value: newValue,
            error: newError
        })

    }
    const taskReject = (taskName) => {
        usedispatch({
            type: REJECT_TASK_LIST_API_ACTION,
            taskName
        })

    }

    const deletedTask = (taskName) => {
        usedispatch({
            type: DELETED_TASK_LIST_API_ACTION,
            taskName: taskName
        })

    }

    const taskDone = (taskName) => {

        usedispatch({
            type: DONE_TASK_LIST_API_ACTION,
            taskName
        })

    }
    return (
        <form onSubmit={addTask}>

            <div className="card">
                <div>
                    {/* <button className='btn btn-success' onClick = {(event) => {
                        event.preventDefault();
                      getTaskList()
                    }}>Dispatch GetTaskListApiAction</button> */}
                </div>
                <div className="card__header">
                    <img src="./img/X2oObC4.png" />
                </div>
                {/* <h2>hello!</h2> */}
                <div className="card__body">


                    <div className="filter-btn">
                        <a id="one" href="#"><i className="fa fa-check-circle" /></a>
                        <a id="two" href="#" ><i className="fa fa-sort-alpha-down" /></a>
                        <a id="three" href="#" ><i className="fa fa-sort-alpha-up" /></a>
                        <a id="all" href="#"><i className="fa fa-clock" /></a>
                        <span className="toggle-btn">
                            <i className="fa fa-filter" />
                            <i className="fa fa-times" />
                        </span>
                    </div>
                    <div className="card__content">
                        <div className="card__title">
                            <h2>My Tasks</h2>
                            <p>September 9,2020</p>
                        </div>
                        <div className="card__add">
                            <input name='taskName' onChange={handleChange} id="newTask"
                                type="text" placeholder="Enter an activity..." />
                            <button onClick={addTask} id="addItem">
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                        <p style={{ color: 'red' }}>{state.error.taskName}</p>

                        <div className="card__todo">
                            {/* Uncompleted tasks */}
                            {renderTaskUncompleted()}
                            <ul className="todo" id="todo" />
                            {/* Completed tasks */}
                            {renderTaskCompleted()}
                            <ul className="todo" id="completed" />
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )
}
