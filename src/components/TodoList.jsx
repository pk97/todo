import {useEffect, useState} from "react";
import {deleteTodoFor, fetchTodos} from "../api";
import {useAuth} from "./security/AuthContext";
import {useNavigate} from "react-router-dom";
import todo from "./Todo";

const TodoList = () => {

    const [todos, setTodos] = useState([{}]);
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const authContext = useAuth();

    useEffect( () => {
        const func = async () => {
            const x = await fetchTodos(authContext.username);
            setTodos(x);
        }
        func();
    }, []);

    const deleteTodo = async (userName, todoId) => {
        try {
            await deleteTodoFor(userName, todoId);
            const updatedTodos = await fetchTodos(userName);
            setTodos(updatedTodos);
            setMessage('Todo deleted successfully');
        } catch (error) {
            console.log(error);
            setMessage('Error while deleting');
        }
    }

    const updateTodo = async (userName, todoId) => {
        navigate(`/${userName}/todos/${todoId}`)
    }



    return (
        <>
            <div className="container"> Todo List</div>
            {message && <div className="alert alert-warning" role="alert">
                {message}
            </div>}
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
                {todos.length > 1 && todos.map(todo => (
                    <tr>
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.date}</td>
                        <td>{todo.done ? "true" : "false"}</td>
                        <td>
                            <button className="btn btn-warning"
                                    onClick={() => deleteTodo(authContext.username, todo.id)}> Delete
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-info"
                                    onClick={() => updateTodo(authContext.username, todo.id)}> Update
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoList;