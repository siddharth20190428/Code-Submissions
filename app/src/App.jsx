import "./App.css";
import List from "./Components/List/List";
import Modal from "./Components/Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <List isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
}

export default App;
