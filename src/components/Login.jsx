import './Login.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./security/AuthContext";
const Login = () => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [loginMessage, setLoginMessage] = useState(false);
    const navigate = useNavigate();
    const authContext = useAuth();
 function handlerUsername(event) {
     console.log(event);
     setUsername(event.target.value);
 }

    const handlerPassword = (event) =>{
        setPassword((event.target.value));
    }
    const validate =  () => {
     authContext.setAuthenticated(username === "123" && password === "123");
     console.log(authContext.authenticated);
      setLoginMessage( authContext.authenticated ? "Success" : "Failure");
     if (loginMessage === "Success") navigate(`/welcome/${username}`);
    }

    return (
        <div className="Login">
            <h2> Login Page</h2>
            <div>
            <label> Username </label>
            <input type="text" name="username" value={username} onChange={handlerUsername}/>
            </div>
            <div>
            <label> Password </label>
            <input type="password" name="password" value={password} onChange={handlerPassword}/>
            </div>
            <button name="submit" onClick={validate} > Submit</button>
            {(loginMessage === "Success") && <div >Success!</div>}
            {(loginMessage === "Failure") && <div >Failure!</div>}
        </div>
    );
}

export default Login;