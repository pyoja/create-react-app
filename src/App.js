import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, b] = useState(["남자코트", "여자코트", "사장코트"]);
  let [likes, setLikes] = useState([0, 0, 0]);

  const increaseLikes = (index) => {
    const newLikes = [...likes];
    newLikes[index] = newLikes[index] + 1;
    setLikes(newLikes);
  };

  return (
    <div className="App">
      <div className="balck-nav">
        <h4>표정훈 블로그</h4>
      </div>
      {글제목.map((title, index) => (
        <div className="list" key={index}>
          <h4>
            {title}
            <span
              onClick={() => {
                increaseLikes(index);
              }}
            >
              👍
            </span>
            {likes[index]}
          </h4>
          <p>발행일:23-07-10</p>
        </div>
      ))}
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>내용</p>
      </div>
    </div>
  );
}

export default App;
