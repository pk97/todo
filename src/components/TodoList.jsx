import {useEffect, useState} from "react";
import {fetchTodos} from "../api";

const TodoList = () => {

    const [todos, setTodos] = useState([{}]);

    useEffect( () => {
        const func = async () => {
            const x = await fetchTodos('123');
            setTodos(x);
        }
        func();
    }, []);


    return (
        <>
        <div className="container"> Todo List</div>
    <table className="table">
        <thead>
        <tr>
            <th>Sno</th>
            <th>Description</th>
            <th>Date</th>
            <th>Checked</th>
        </tr>
        </thead>
        <tbody>
        {/*use ( pareenthises becausing returning JSX*/}
        {todos.map(todo => (
            <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <td>{todo.done ? "true" : "false"}</td>
            </tr>
        ))}
        </tbody>
    </table>
        </>
    );
}

export default TodoList;