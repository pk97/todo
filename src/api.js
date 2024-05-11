import axios from "axios";


export const fetchTodos = (userName) => {
    return axios.get(
        "http://localhost:8080/todos/123"
    ).then( response => {
        console.log(response)
        return response.data;
    })
        .catch( error => console.log(error))
}