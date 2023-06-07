import {useTheme} from "../../context/ThemeContext"
import './LightSwitch.css';

function LightSwitch() {
  const {themeName, setThemeName} = useTheme();
  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={e => setThemeName("day")}>DAY</div>
      <div className="off" onClick={e => setThemeName("night")}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;