import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Error from "./components/Error";
import Logout from "./components/Logout";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthProvider} from "./components/security/AuthContext";
import HeaderComponent from "./components/HeaderComponent";

function App() {

  return (
      <div className="App">
          <AuthProvider>
              <BrowserRouter>
                  <HeaderComponent/>
                  <hr/>
                  <Routes>
                      <Route path='/' element={<Login/>}></Route>
                      <Route path='/login' element={<Login/>}></Route>
                      <Route path='/todo' element={<Todo/>}></Route>
                      <Route path='/logout' element={<Logout/>}></Route>
                      <Route path='/welcome/:username' element={<Welcome/>}></Route>

                      <Route path={'/*'} element={<Error/>}></Route>
                  </Routes>
              </BrowserRouter>
              <hr/>
              <footer className={"Footer"}> Footer text</footer>
          </AuthProvider>
      </div>
  );
}

export default App;
