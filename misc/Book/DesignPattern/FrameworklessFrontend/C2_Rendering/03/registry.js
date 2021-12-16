/** 
 * registry key는 data-component 속성 값과 일치해야한다. 
 * 이것이 구성 요소 기반 렌더링 엔진의 핵심 메커니즘이다. 
 */
const registry = {}

/** 
 * 고차 함수 렌더링
 */

const renderWrapper = component => {
    return (targetElement, state) => {
        const element = component(targetElement, state);
        const childComponents = element.querySelectorAll('[data-component]');
        
        Array.from(childComponents).forEach((target) => {
            const name = target.dataset.component; // data-component attribute 값을 꺼내는 과정, data- 뒤의 값으로 꺼내온다. 여기선 component
            const child = registry[name]; // *중요*, tag 에 data-component attribute로 매핑된 값을 꺼내서 해당 값을 key로 매핑된 함수가 있는지 확인
            if (!child) {
                return;
            }
            /** target과 target element의 data-component attribute로 매핑된 값을 key로 하는 함수를 통해 생성된 element를 바꿔준다. */
            target.replaceWith(child(target, state));
        })

        return element;
    }
}

/** controller 에서 넘긴 이름과 함수를 매핑해서 관리한다 */
const add = (name, component) => {
    registry[name] = renderWrapper(component);
}

const renderRoot = (root, state) => {
    const cloneComponent = root => {
        return root.cloneNode(true);
    }

    return renderWrapper(cloneComponent)(root, state); // root를 clone하는 함수와 root를 함께 넘겨준다. 최초에 root를 불러올 때만 사용할 내용이다.
}

export default {
    add,
    renderRoot
  }