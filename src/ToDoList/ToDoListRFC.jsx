import React from 'react'

export default function ToDoListRFC() {
    return (
        <div>
          
          <div className="card">
                    <div className="card__header">
                        <img src="./img/X2oObC4.png" />
                    </div>
                    {/* <h2>hello!</h2> */}
                    <div className="card__body">
                        <div className="filter-btn">
                            <a id="one" href="#"><i className="fa fa-check-circle" /></a>
                            <a id="two" href="#" onclick="sortASC()"><i className="fa fa-sort-alpha-down" /></a>
                            <a id="three" href="#" onclick="sortDES()"><i className="fa fa-sort-alpha-up" /></a>
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
                                <input id="newTask" type="text" placeholder="Enter an activity..." />
                                <button id="addItem">
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                            <div className="card__todo">
                                {/* Uncompleted tasks */}
                                <ul className="todo" id="todo" />
                                {/* Completed tasks */}
                                <ul className="todo" id="completed" />
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}
