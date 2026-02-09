import { useState } from "react";

function App() {
  const [list, setList] = useState(["Task 1"]);
  const [task, setTask] = useState("");

  const handleAdd = () => {
    setList([...list, task]);
    setTask("");
  };

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>Add Item</button>

      <ul>
        {list.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
