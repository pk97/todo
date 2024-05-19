import axios from "axios";

const apiClient = axios.create({ baseURL: 'http://localhost:8080/'})
export const fetchTodos = (userName) => {
    return apiClient.get(
        `todos/${userName}`
    ).then( response => {
        console.log('succesfully called todos')
        return response.data;
    })
        .catch( error => console.log(error))
}

export const deleteTodoFor = (userName, todoId) => {
    return apiClient.delete(
        `users/${userName}/todos/${todoId}`
    ).then( response => {
            console.log('successfully deleted todo');
            return response;
        }
    )
}