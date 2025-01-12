import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';

const Todo = ({ task, toggleTodo, editTodo, deleteTodo }) => {
    return (
        <div style={{ border: "none", outline: "none" }}>
            <div
                className="d-flex align-items-center justify-content-between p-2 "
                style={{
                    border: "none",
                    background: "rgb(91, 19, 97)", 
                    borderRadius: "0", 
                }}
            >
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                        icon={task.completed ? faCheckSquare : faSquare}
                        className= "me-2 text-white"
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleTodo(task.id)}
                    />
                    <p
                        className={`m-0 ${
                            task.completed ? "text-decoration-line-through" : ""
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleTodo(task.id)}
                    >
                        {task.task}
                    </p>
                </div>

                <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="text-white me-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => editTodo(task.id)}
                    />
                    <FontAwesomeIcon
                        icon={faTrash}
                        className="text-white"
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteTodo(task.id)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Todo;


