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

const getTodoCount = todos => {
    const notCompleted = todos.filter(todo => !todo.completed);

    const { length } = notCompleted;
    if (length === 1) {
        return '1 Item left';
    }

    return `${length} Items left`;
}

/**
 * @param targetElement: document.querySelector('.todoapp')
 * @param state: 
 *  todos: Array<{ text: string, completed: boolean}>
 *  currentFilter: string
 */

export default (targetElement, state) => {
    const {
        todos, // getTodos.js 에서 faker 로 받아온 내용, random한 text: string, completed: boolean 로 구성된 객체를 가진 array
        currentFilter
    } = state;

    const element = targetElement.cloneNode(true); // <selection class='todoapp'> node 복사, 새 가상 노드
    /** 아래에서 DOM 조작 */
    const list = element.querySelector('.todo-list');
    const counter = element.querySelector('.todo-count');
    const filters = element.querySelector('.filters');

    list.innerHTML = todos.map(getTodoElement).join(''); // { text, completed } 객체를 li tag 로 해석해서 반환한 값을 list 에 넣어줌
    counter.textContent = getTodoCount(todos); // 몇 개의 Item 이 남았는지 string 으로 해석해서 반환한 값을 counter 에 넣어줌

    /** filters 에 currentFilter: boolean 에 따라 selected class 넣고 빼주기 */
    Array
        .from(filters.querySelector('li a'))
        .forEach(a => {
            if (a.textContent === currentFilter) {
                a.classList.add('selected');
            } else {
                a.classList.remove('selected');
            }
        });

    return element;
}