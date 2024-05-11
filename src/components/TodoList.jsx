import {useEffect, useState} from "react";
import {fetchTodos} from "../api";

const TodoList = () => {

    const [todos, setTodos] = useState([{}]);

    useEffect( () => {
        const func = async () => {
            const x = await fetchTodos('123');
            console.log(x);
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
        </tr>
        </thead>
        <tbody>
        {/*use ( pareenthises becausing returning JSX*/}
        {todos.map(todo => (
            <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
            </tr>
        ))}
        </tbody>
    </table>
        </>
    );
}

export default TodoList;