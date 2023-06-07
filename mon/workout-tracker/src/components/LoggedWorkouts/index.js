import { useContext } from "react";
import { WorkoutContext } from "../../context/WorkoutContext";

const WorkoutList = () => {
  const {workouts} = useContext(WorkoutContext)
  return (
    <>
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

export default WorkoutList;
