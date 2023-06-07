import { createContext, useState } from "react";

export const WorkoutContext = createContext();

export default function WorkoutContextProvider(props) {
    const [workouts, setWorkouts] = useState([
        {title: "Default workout", type: "Walk", duration: 20}
    ]);

    return (
        <WorkoutContext.Provider value={{workouts, setWorkouts}}>
            {props.children}
        </WorkoutContext.Provider>
    )
}