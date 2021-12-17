import FirstComponent from "./ReactComponentTest/firstComponent";
import SecondComponent from "./ReactComponentTest/secondComponent";

const root = document.getElementById("root");

const MyComponent = (
    <div>
        <FirstComponent />
        <SecondComponent />
    </div>
    );

ReactDOM.render(MyComponent, root);