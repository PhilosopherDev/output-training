export default () => {
    const e = React.createElement;
    //  "좋아요" <button>을 표시
    return (
        <button onClick={() => console.log("JSX!!")}>
        Like By JSX
        </button>
    );
}