/** 간단한 컨트롤러. 모델과 뷰를 잇는다. */

import getTodos from '../getTodos.js';
import todoView from "./view/todos.js";
import counterView from "./view/counter.js";
import filtersView from "./view/filters.js";
import registry from './registry.js';

/** registry에 name: function 을 매핑시켜두는 작업, 첫번째 parameter 값이 HTML tag의 data-component attribute에 넣어준 값과 일치해야한다. */
registry.add('todos', todoView);
registry.add('counter', counterView);
registry.add('filters', filtersView);

const state = {
    todos: getTodos(), // random한 text: string, completed: boolean 로 구성된 객체를 가진 array, 곧 model
    currentFilter: 'All'
}

/** 모든 DOM 조작이나 애니메이션은 requestAnimationFrame DOM API를 기반으로 해야한다. */
window.requestAnimationFrame(() => {
    const main = document.querySelector('.todoapp');
    const newMain = registry.renderRoot(main, state); // root 를 넣으면 renderRoot 안에서 알아서 고차함수에 필요한 함수를 넣음과 함께 main, state 도 넘겨서 실행한다.
    main.replaceWith(newMain); // 새롭게 생성한 element로 기존 main을 바꿔치기. 브라우저 렌더링.
})
