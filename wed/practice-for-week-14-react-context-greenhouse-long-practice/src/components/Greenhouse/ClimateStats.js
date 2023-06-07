import { useContext } from 'react';
import { ClimateContext } from '../../context/ClimateContext';
import './ClimateStats.css';

function ClimateStats() {
  const {temp, humidity} = useContext(ClimateContext)
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temp}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;