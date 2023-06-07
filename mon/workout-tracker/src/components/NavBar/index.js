import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <nav className="nav">
            <ul className=".nav">
                <li><NavLink to="/new">Log a New Workout</NavLink></li>
                <li><NavLink to="/workouts">View Logged Workouts</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation