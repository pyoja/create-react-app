import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, b] = useState(["남자코트", "여자코트", "사장코드"]);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="balck-nav">
        <h4>표정훈 블로그</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <p>발행일:23-07-10</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>발행일:23-07-10</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>발행일:23-07-10</p>
      </div>
    </div>
  );
}

export default App;
