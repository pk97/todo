import {AuthContext, useAuth} from "./security/AuthContext";
import {useNavigate} from "react-router-dom";

const HeaderComponent = () => {
    const authContext = useAuth();
    const navigate = useNavigate();

    return (<header>
        <h1> Todo Application </h1>
        <button className="logoutButton" onClick={() => {
            authContext.setAuthenticated(false);
            console.log(authContext.authenticated);
            navigate('/logout');
        }
        }>
            Logout</button>
        <hr/>
    </header>);
}

export default HeaderComponent;