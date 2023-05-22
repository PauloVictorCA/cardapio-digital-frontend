import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import { useFoodData } from "./hooks/useFoodData";
import { FoodData } from "./interfase/FoodData";
import { CreateModal } from "./components/create-modal/CreateModal"; // Corrigir o nome do arquivo

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Cadárpio</h1>
      <div className="card-grid">
        {data?.map((foodData: FoodData) => (
          <Card
            key={foodData.id}
            price={foodData.price}
            title={foodData.title}
            url_image={foodData.url_image}
          />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  );
}

export default App;
