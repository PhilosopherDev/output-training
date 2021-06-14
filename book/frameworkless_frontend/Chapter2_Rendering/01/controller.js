/** 간단한 컨트롤러. 모델과 뷰를 잇는다. */

import getTodos from '../getTodos.js';
import view from './view.js';

const state = {
    todos: getTodos(), // random한 text: string, completed: boolean 로 구성된 객체를 가진 array, 곧 model
    currentFilter: 'All'
}

const main = document.querySelector('.todoapp');

/** 모든 DOM 조작이나 애니메이션은 requestAnimationFrame DOM API를 기반으로 해야한다. */
window.requestAnimationFrame(() => {
    const newMain = view(main, state); // target DOM Element 와 state 매개변수를 사용해 view 를 업데이트한다. 그리고 새 노드를 반환한다.
    main.replaceWith(newMain); // 새롭게 생성한 element로 기존 main을 바꿔치기. 브라우저 렌더링.
})
