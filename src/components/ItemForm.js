import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "category") {
      setCategory(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name,
      category,
    };
    setItems([...items, newItem]);
    setName("");
    setCategory("Produce");

    if (onItemFormSubmit) {
      onItemFormSubmit(newItem);
    }
  };

  return (
    <div className="NewItem">
      <h2>Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          Category:
          <select name="category" value={category} onChange={handleChange}>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>

        <button type="submit">Add to List</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemForm;
