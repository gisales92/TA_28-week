import ReactSlider from "react-slider";
import { useContext, useEffect, useState } from "react";
import { ClimateContext } from "../../context/ClimateContext";
import "./Hygrometer.css";

function Hygrometer() {
  const { humidity, setHumidity } = useContext(ClimateContext);
  const [desiredHum, setDesiredHum] = useState(humidity);

  useEffect(() => {
    if (humidity !== desiredHum) {
      const humTimeout = setTimeout(() => {
        // Enjoy this nested ternary -- Since we're incrementing/decrementing humidity by 2, I'm setting up a series of checks to see if we are only one away from the desired humidity so there is not a situation were we keep going one above and below the desired humidity
        desiredHum > humidity
          ? desiredHum > humidity + 1
            ? setHumidity(humidity + 2)
            : setHumidity(humidity + 1)
          : desiredHum < humidity - 1
          ? setHumidity(humidity - 2)
          : setHumidity(humidity - 1);

        return () => clearTimeout(humTimeout);
      }, 1000);
    }
  }, [desiredHum, humidity, setHumidity]);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={desiredHum}
        onAfterChange={(val) => {
          setDesiredHum(val);
        }}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;
