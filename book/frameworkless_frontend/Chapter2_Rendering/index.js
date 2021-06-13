import getTodos from './getTodos.js';
import view from './01/view.js';

const state = {
    todos: getTodos(), // random한 text: string, completed: boolean 로 구성된 객체를 가진 array
    currentFilter: 'All'
}

const main = document.querySelector('.todoapp');

window.requestAnimationFrame(() => {
    const newMain = view(main, state);
    main.replaceWith(newMain); // 새롭게 생성한 element로 기존 main을 바꿔치기.
})
