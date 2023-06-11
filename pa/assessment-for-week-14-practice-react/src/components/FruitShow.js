import { useParams } from "react-router-dom";

function FruitShow({fruits}) {
  const {fruitId} = useParams();
  const fruit = fruits.find((obj) => obj.id === fruitId)
  return (
    <>
    <h2>{fruit.name}</h2>
    <p>{fruit.color}</p>
    <p>Sweetness: {fruit.sweetness}</p>
    <p>Seeds: {fruit.seeds}</p>
    </>
  );
}

export default FruitShow;