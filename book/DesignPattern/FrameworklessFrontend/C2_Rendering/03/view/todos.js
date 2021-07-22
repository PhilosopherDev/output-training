const getTodoElement = todo => {
    const {
        text,
        completed
    } = todo;
    return `
    <li ${completed ? 'class="completed"' : ""}>
        <div className="view">
            <input 
                ${completed ? 'checked' : ''}
                type="checkbox" 
                class="toggle" 
            />
            <label>${text}</label>
            <button className="destroy"></button>
        </div>    
        <input class="edit" value="${text}"/>
    </li>`
}

export default (targetElement, { todos }) => {
    const newTodoList = targetElement.cloneNode(true);
    const todoListElements = todos.map((todo) => getTodoElement(todo)).join("");
    newTodoList.innerHTML = todoListElements;
    return newTodoList;
}