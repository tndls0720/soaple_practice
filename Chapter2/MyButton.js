function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    "button",
    { onClick: () => setIsClicked(true) }, // `onClick`으로 수정
    isClicked ? "Clicked!" : "Click here!"
  );
}

// DOM 컨테이너 선택
const domContainer = document.querySelector("#root");

// React DOM에 렌더링
const root = ReactDOM.createRoot(domContainer); // ReactDOM.createRoot를 사용
root.render(React.createElement(MyButton));
