import "./App.css";
import SearchTodos from "./Todos";
import Todos from "./Todos";
import SearchUsers from "./Users";
import Users from "./Users";

function App() {
  return (
    <div className="">
      <div style={{ display: "flex" }}>
        <div>
          <h1>Users</h1>
          <SearchUsers />
        </div>
        <div>
          <h1>Todos</h1>
          <SearchTodos />
        </div>
      </div>
    </div>
  );
}

export default App;
