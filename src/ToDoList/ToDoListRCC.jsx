import React, { Component } from 'react'
import axios from 'axios'
import './ToDoList.css'

export default class ToDoListRCC extends Component {

    state = {
        taskLisk: [],
        value: {
            taskName: ''
        },
        error: {
            taskName: ''
        }
    }

    getTaskList = () => {

        let promise = axios({
            method: 'GET',
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask'
        })
        promise.then((res) => {

            this.setState({
                taskLisk: res.data
            })
        })
        promise.catch((err) => {
            console.log('that bai');
            console.log(err.respone.data)
        })

    }

    // xu ly rejectTask
    taskReject = (task) => {
        
        let promise = axios({
            method:'PUT',
            url:`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${task.taskName}`
        })

        promise.then((res) => {
            alert(res.data);
            this.getTaskList();
        })

        promise.catch((err) => {
            alert(err.respone.data)
        })

    }

    deletedTask = (task) => {

        let promise = axios({
            method: 'DELETE',
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${task.taskName}`
        })

        promise.then(() => {
            this.getTaskList()
        })

        promise.catch((err) => {
            console.log(err)
        })

    }

    taskDone = async (task) => {
        
        let promise = await axios({
            method:"PUT",
            url:`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${task.taskName}`
        })

        this.getTaskList()

    }
    renderTaskUncompleted = () => {
        return this.state.taskLisk.filter(task => !task.status).map((task, index) => {
            return <li key={index} style = {{ justifyContent:'normal',color:'green'}}>
                {task.taskName}

                <i className="fa fa-trash-alt" style={{ cursor: 'pointer',marginLeft:213,marginRight:10 }} onClick={() => {
                    this.deletedTask(task)
                }}></i>
                <i className="fa fa-check" style = {{cursor:'pointer'}} onClick = {() => {
                   this.taskDone(task)
                }}></i>
            </li>
        })

    }
    renderTaskCompleted = () => {
        return this.state.taskLisk.filter(task => task.status).map((task, index) => {
            return <li key={index}>
                {task.taskName}
                <i className="fa fa-trash-alt" style={{ cursor: 'pointer',marginLeft:213,marginRight:10 }} onClick={() => {
                    this.deletedTask(task)
                }}></i>
                <i className="fa fa-undo" style = {{cursor:'pointer'}} onClick = {() => {
                   this.taskReject(task)
                }}></i>
            </li>
        })
    }

    componentDidMount() {

        this.getTaskList()
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        let newValue = { ...this.state.value };
        newValue = { ...newValue, [name]: value }


        let newError = { ...this.state.error };
        let regexString = /^[a-z A-Z]+$/;
        if (!regexString.test(value) || value.trim() === '') {

            newError[name] = value + ' invalid !';
        } else {
            newError[name] = '';
        }

        this.setState({
            ...this.state,
            value: newValue,
            error: newError
        })

    }

    addTask = (event) => {
        event.preventDefault();
        if (this.state.error.taskName === '') {
            let promise = axios({
                method: 'POST',
                url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
                data: {
                    taskName: this.state.value.taskName
                }
            })
            promise.then(() => {
                this.getTaskList()

            })
            promise.catch((err) => {
                alert(err.response.data)
            })
        } else {
            alert('nhap lai cho dung')
        }

    }
    render() {
        return (
            <form onSubmit={this.addTask} >

                <div className="card">
                    <div className="card__header">
                        <img src="./img/X2oObC4.png" alt="hinhAnh" />
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
                                <input onChange={this.handleChange} id="newTask" name='taskName'
                                    type="text" placeholder="Enter an activity..." />
                                <button id="addItem" onClick={this.addTask}>
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                            <p style={{ color: 'red' }}>{this.state.error.taskName}</p>
                            <div className="card__todo">
                                <p style={{ color: 'green' }}>Uncompleted tasks</p>

                                <ul className="todo" id="todo" >
                                    {this.renderTaskUncompleted()}
                                </ul>
                                <p style={{ color: 'green' }}>Completed tasks</p>
                                <ul className="todo" id="completed" >
                                    {this.renderTaskCompleted()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        )
    }
}
