import {useContext} from "react";
import {AuthContext} from "./security/AuthContext";

const HeaderComponent = () => {

    const authContext = useContext(AuthContext);
    return (<header>
        <h1> Todo Application </h1>
        <button className="logoutButton" onClick={() => {
            console.log(authContext.authenticated)}}> Logout</button>
    </header>);
}

export default HeaderComponent;