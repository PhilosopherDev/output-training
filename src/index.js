import FirstComponent from "./view/firstComponent";
import SecondComponent from "./view/secondComponent";

const root = document.getElementById("root");

var arr = new Array(10).fill(0);
var arr2 = new Array(10).fill(<SecondComponent />);

const MyComponent = (
    <div>
        {arr.map(() => <FirstComponent />)}
        {arr2}
    </div>
    );

ReactDOM.render(MyComponent, root);