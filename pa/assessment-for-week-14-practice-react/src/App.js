import fruits from "./mockData/fruits.json";
import FruitShow from "./components/FruitShow"
import FruitsIndex from "./components/FruitsIndex";
import FruitForm from "./components/FruitForm";
import FavoriteFruit from "./components/FavoriteFruit";
import SetFavoriteFruit from "./components/SetFavoriteFruit";
import Navigation from "./components/Navigation";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      <h1>Welcome to Fruits App</h1>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <FruitsIndex fruits={fruits}/>
        </Route>
        <Route path="/fruits/new">
          <FruitForm fruits={fruits} />
        </Route>
        <Route path="/fruits/:fruitId">
          <FruitShow fruits={fruits}/>
        </Route>
        <Route path="/fav-fruit">
          <FavoriteFruit fruits={fruits} />
        </Route>
        <Route path="/set-fav-fruit">
          <SetFavoriteFruit fruits={fruits} />
        </Route>
        <Route path="">
          Page Not Found
        </Route>
      </Switch>
    </>
  );
}

export default App;