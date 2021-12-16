import FirstComponent from "./firstComponent";
import SecondComponent from "./secondComponent";

const root = document.getElementById("root");

const MyComponent = (
    <div>
        <FirstComponent />
        <SecondComponent />
    </div>
    );

ReactDOM.render(MyComponent, root);