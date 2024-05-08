import {AuthContext, useAuth} from "./security/AuthContext";
import {useNavigate} from "react-router-dom";

const HeaderComponent = () => {
    const authContext = useAuth();
    const navigate = useNavigate();

    const text = (authenticated) => authenticated ? "Logout": "Login"

    return (<header>
        <h1> Todo Application </h1>
        <button className="logoutButton" onClick={() => {
            if (authContext.authenticated) {
                authContext.setAuthenticated(false);
                console.log(authContext.authenticated);
                navigate('/logout');
            }
            else {
                navigate('/login');
        }
        }
        }>
            {text(authContext.authenticated)}</button>
        <hr/>
    </header>);
}

export default HeaderComponent;