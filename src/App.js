import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Hey... What's up today? 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(event) => setToDo(event.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        >
          {" "}
        </i>
      </div>

      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(event) => {
                    console.log(event.target.checked);
                    console.log(obj);
                    setToDos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = event.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={(e) => {
                    setToDos(toDos.filter((obj2) => obj2.id !== obj.id));
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
