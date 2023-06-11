import {Link} from "react-router-dom";
import { useFavFruitContext, FavFruitContext } from "../context/FavFruitContext";
import { useContext } from "react";


const FavoriteFruit = ({fruits}) => {
  // const {favFruitId} = useFavFruitContext();
  const {favFruitId} = useContext(FavFruitContext);
  const fruit = fruits.find((obj) => obj.id === favFruitId)
  return (
    <>
      <h2>Favorite Fruit</h2>
      <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
    </>
  );
}

export default FavoriteFruit;