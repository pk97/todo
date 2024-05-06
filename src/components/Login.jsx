import './Login.css'
import {useState} from "react";
const Login = () => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [loginMessage, setLoginMessage] = useState(false);

 function handlerUsername(event) {
     console.log(event);
     setUsername(event.target.value);
 }

    const handlerPassword = (event) =>{
        setPassword((event.target.value));
    }
    const validate = () => {
        console.log(username === "123" && password === "123");
     setLoginMessage((username === "123" && password === "123") ? "Success" : "Failure");
    }

    return (
        <div className="Login">
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