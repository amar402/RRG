import "./App.css";
import { MainComponent } from "./components/main/main.component";
import { UserList } from "./components/userList/userList.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainComponent />
        <UserList />
      </header>
    </div>
  );
}

export default App;
