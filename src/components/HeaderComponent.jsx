import {useContext} from "react";
import {AuthContext, useAuth} from "./security/AuthContext";

const HeaderComponent = () => {
    const authContext = useAuth();
    return (<header>
        <h1> Todo Application </h1>
        <button className="logoutButton" onClick={() => {
            console.log(authContext.authenticated)}}> Logout</button>
    </header>);
}

export default HeaderComponent;