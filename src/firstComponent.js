// first component
export default () => {
    const e = React.createElement;

    // "좋아요" <button>을 표시
    return e(
      'button',
      { onClick: () => console.log("Like") },
      'Like'
    );
}