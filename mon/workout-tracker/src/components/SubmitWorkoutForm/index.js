import { useState, useEffect, useContext} from "react";
import { useHistory } from "react-router-dom";
import { WorkoutContext } from "../../context/WorkoutContext";
import "./SubmitWorkoutForm.css"

const SubmitWorkoutForm = () => {
  const {workouts, setWorkouts} = useContext(WorkoutContext)
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState(0);
  const [validationErrors, setValidationErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

const onFormSub = (e) => {
    e.preventDefault();

    setWorkouts([...workouts, {title, type, duration}]);

    setTitle("");
    setType("");
    setDuration(0);
    history.push("/workouts")
}

useEffect(() => {
    const errors = {};
    if (title.length < 4 || title.length > 25) errors.title = "Workout title must be between 4 and 25 characters";
    if (duration < 5) errors.duration = "Workouts must be at least 5 minutes long";
    setValidationErrors(errors);
    (!errors.title && !errors.duration) ? setDisabled(false) : setDisabled(true)
}, [title, duration])


  return (
    <>
      <h2>Submit Workout</h2>
      <form className="submit_form" onSubmit={onFormSub}>
        <label htmlFor="title">
          Workout Title:
          <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
        </label>
        {validationErrors.title ? <p className="error">{validationErrors.title}</p> : null}
        <label htmlFor="type">
          Select Workout Type:
          <select id="type" value={type} onChange={e => setType(e.target.value)}>
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
          <input type="number" id="duration" value={duration} onChange={e => setDuration(e.target.value)}/>
        </label>
        {validationErrors.duration ? <p className="error">{validationErrors.duration}</p>: null}
        <button type="submit" disabled={disabled}>Submit Workout</button>
      </form>

    </>
  );
};

export default SubmitWorkoutForm;
