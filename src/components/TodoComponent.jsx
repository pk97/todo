import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchTodo} from "../api";
import {useAuth} from "./security/AuthContext";

const TodoComponent = () => {
    const {todoId} = useParams();
    const authContext = useAuth();

    useEffect( () => {
         fetchTodo(authContext.username, todoId)
             .then(res => console.log(res))
    }, []);

    return (<div> Hello</div>);

};

export default TodoComponent;