import { Route, Switch } from "react-router-dom";
import WorkoutList from "./components/LoggedWorkouts";
import SubmitWorkoutForm from "./components/SubmitWorkoutForm";
import Navigation from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Workout Tracker</h1>
      <Navigation />
      <Switch>
        <Route exact path="/new">
          <SubmitWorkoutForm />
        </Route>
        <Route exact path="/workouts">
          <WorkoutList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
