import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./Components/List/List";
import Form from "./Components/Form/Form";

function App() {
  return (
    <Routes>
      <Route path="/" Component={List} />
      <Route path="/create" Component={Form} />
    </Routes>
  );
}

export default App;
