import ReactSlider from "react-slider";
import { useContext, useState, useEffect } from "react";
import { ClimateContext } from "../../context/ClimateContext";
import './Thermometer.css';

function Thermometer() {
  const {temp, setTemp} = useContext(ClimateContext);
  const [desiredTemp, setDesiredTemp] = useState(temp);

  useEffect(() => {
    if (temp !== desiredTemp) {
      const tempTimeout = setTimeout(() => {
        desiredTemp > temp ? setTemp(temp + 1) : setTemp(temp - 1)

        return () => clearTimeout(tempTimeout)
      }, 1000)
    }
  }, [desiredTemp, temp, setTemp])


  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={desiredTemp}
        onAfterChange={(val) => {setDesiredTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;