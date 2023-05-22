import "./CreateModal.css";

import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interfase/FoodData";

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

interface Modalprops {
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      ></input>
    </>
  );
};

export function CreateModal({ closeModal }: Modalprops) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [url_image, setUrl_image] = useState("");
  const { mutate, isSuccess } = useFoodDataMutate();

  const submit = () => {
    const foodData: FoodData = {
      title,
      price,
      url_image,
    };
    mutate(foodData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardárpio</h2>
        <form className="input-container">
          <Input label="title" value={title} updateValue={setTitle} />
          <Input label="price" value={price} updateValue={setPrice} />
          <Input
            label="url_image"
            value={url_image}
            updateValue={setUrl_image}
          />
        </form>
        <button onClick={submit} className="btn-secondary">
          Postar
        </button>
      </div>
    </div>
  );
}
