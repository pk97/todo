import axios from "axios";

const apiClient = axios.create({ baseURL: 'http://localhost:8080/'})
export const fetchTodos = (userName) => {
    return axios.get(
        "todos/123"
    ).then( response => {
        console.log('succesfully called todos')
        return response.data;
    })
        .catch( error => console.log(error))
}