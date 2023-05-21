import "./App.css";
import Card from "./components/card/Card";
import { useFoodData } from "./hooks/useFoodData";
import { FoodData } from "./interfase/FoodData";

function App() {
  const { data } = useFoodData();

  return (
    <div className="container">
      <h1>Cadárpio</h1>
      <div className="card-grid">
        {data?.map((foodData: FoodData) => (
          <Card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
