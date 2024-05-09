import './Todo.css';
import TodoList from "./TodoList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import Error from "./Error";
import {useAuth} from "./security/AuthContext";

const Todo = () => {
    const authContext = useAuth();
    const authorizedPath = (child) => {
        if (authContext.authenticated)
            return (child);
        else
            return (<Login/>);
    }

    return (
        <>
            <BrowserRouter>
                <HeaderComponent/>
                <hr/>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/logout' element={<Logout/>}></Route>

                    <Route path='/todo' element={authorizedPath(<TodoList/>)}></Route>
                    <Route path='/welcome/:username' element={authorizedPath(<Welcome/>)}></Route>

                    <Route path={'/*'} element={<Error/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Todo;