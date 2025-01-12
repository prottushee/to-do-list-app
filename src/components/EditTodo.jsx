import { useState } from 'react';

const EditTodo = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
    };

    return (
        <form className="d-flex align-items-center" onSubmit={handleSubmit}>
            <input
                className="form-control"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
                Edit
            </button>
        </form>
    );
};

export default EditTodo;
