import { useState } from "react";
import "./SubmitWorkoutForm.css"

const SubmitWorkoutForm = () => {
  const [workouts, setWorkouts] = useState([
    { title: "Morning Walk", type: "Walk", duration: 20 },
  ]);


  return (
    <>
      <h2>Submit Workout</h2>
      <form className="submit_form" >
        <label htmlFor="title">
          Workout Title:
          <input type="text" id="title" />
        </label>
        <label htmlFor="type">
          Select Workout Type:
          <select id="type" >
          <option value="" disabled>-- Select a type --</option>
            <option value="Walk">Walk</option>
            <option value="Run">Run</option>
            <option value="Hike">Hike</option>
            <option value="Swim">Swim</option>
            <option value="Bike">Bike</option>
          </select>
        </label>
        <label htmlFor="duration">
          Workout Duration (in mins.):
          <input type="number" id="duration" />
        </label>
        <button type="submit">Submit Workout</button>
      </form>
      <h2>Logged Workouts</h2>
      <ul>
        {workouts.map((workout) => {
          return (
            <li key={workout.title + workout.duration}>
              <p>Title: {workout.title}</p>
              <p>Type: {workout.type}</p>
              <p>Duration: {workout.duration}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SubmitWorkoutForm;
