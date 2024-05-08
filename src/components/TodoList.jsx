const TodoList = () => {
    const todos = [
        {id: '1', description: 'Work to do'},
        {id: '2', description: 'Read Books'},
        {id: '3', description: 'Document learnings'},
        {id: '4', description: 'Work to do'},
    ];


    return (
        <>
        <div className="container"> Todo List</div>
    <table className="table">
        <thead>
        <tr>
            <th>Sno</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {/*use ( pareenthises becausing returning JSX*/}
        {todos.map(todo => (
            <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
            </tr>
        ))}
        </tbody>
    </table>
        </>
    );
}

export default TodoList;