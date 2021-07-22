import todoView from "./todos.js";
import counterView from "./counter.js";
import filtersView from "./filters.js";

export default (targetElement, state) => {
    const element = targetElement.cloneNode(true);

    /** element 를 더 잘게 쪼개서 그걸 다시 함수로 넘긴다. */
    const list = element.querySelector('.todo-list');
    const counter = element.querySelector('.todo-count');
    const filters = element.querySelector('.filters');
    
    /** 더 작은 단위의 함수로 쪼개서 하나의 함수에서 처리하던 부분을 나눈다. 넘기는 targetElement 도 더 잘게 쪼갰다. */
    list.replaceWith(todoView(list, state));
    counter.replaceWith(counterView(counter, state));
    filters.replaceWith(filtersView(filters, state));

    return element;
}