import "./App.css";
import Todo from "./components/Todo";

function App() {
  const todos = [
    { id: 1, title: "Complete task", completed: true },
    { id: 2, title: "Update Board", completed: false },
  ];
  return (
    <div className="App">
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
      <Todo />
    </div>
  );
}

export default App;
