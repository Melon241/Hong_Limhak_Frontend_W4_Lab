import './App.css'

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

function EmptyMessage(){
  return <p>No tasks available. Please add a task.</p>
}

function App() {
  const tasks = []

  return (
    <div className="App">
      <h1>Task List</h1>
      {tasks.length > 0 ? <TaskList tasks={tasks} /> : <EmptyMessage />}
    </div>
  )
}

export default App
