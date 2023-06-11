import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {
  const [name, setName] = useState("");
  const [sweetness, setSweetness] = useState(1);
  const [color, setColor] = useState("orange");
  const [seeds, setSeeds] = useState("yes");
  const [validationErrors, setValidationErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const errors = {};
    if (name.length < 3) errors.name = "Name must be 3 or more characters";
    if (name.length > 20) errors.name = "Name must be 20 characters or less";
    fruits.forEach(fruitObj => {
      if (fruitObj.name === name) errors.name = "Name already exists"
    })
    if (sweetness < 1 || sweetness > 10) errors.sweetness = "Sweetness must be between 1 and 10";
    setValidationErrors(errors);
    if (!errors.name && !errors.sweetness) {
      setDisabled(false)
    } else setDisabled(true)
  }, [name, sweetness])

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: name,
      sweetness: sweetness,
      color,
      seeds
    })
    history.push("/")
  }

  return (
    <form
      className="fruit-form"
      onSubmit={onSubmit}
    >
      <h2>Enter a Fruit</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <p className="errors">{validationErrors.name}</p>
      <label>
        Select a Color
        <select value={color} onChange={e => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={e => setSweetness(e.target.value)}
        />
      </label>
      <p className="errors">{validationErrors.sweetness}</p>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seeds === "no"}
          onChange={e => setSeeds(e.target.value)}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds === "yes"}
          onChange={e => setSeeds(e.target.value)}
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={disabled}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;