import './Todo.css';
import Login from "./Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./Welcome";
import Error from "./Error";
const Todo = () => {
    return (
        <>
        <div className="Todo"> TODO Application</div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/welcome/:username' element={<Welcome/>}></Route>
                    <Route path={'/*'} element={<Error/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Todo;