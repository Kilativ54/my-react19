import clsx from "clsx"; 
import pilotAvataer from "../../assets/lion.jpg";
import css from "./PilotProfile.module.css";
import { BsAirplaneFill, BsAlarmFill } from "react-icons/bs";
import Alien from "../../assets/alien-svgrepo-com.svg";


export default function PilotProfile({ pilot: { name, rank, age, active } }) {
 
  const statusClsx = clsx (css.text, active ? css.active : css.retired)
 console.log(statusClsx);
  return (
    <div>
      <img src={pilotAvataer} alt="photo" />
      <p className={css.text}>
        <Alien color="blueviolet" fill="blueviolet" className={css.icon} />
        Name:{name}
      </p>
      <p className={css.text}>
        <BsAirplaneFill className={css.icon} />
        Rank: {rank}
      </p>
      <p className={css.text}>
        <BsAlarmFill className={css.icon} />
        Age: {age}
      </p>
      <p className={statusClsx}>Status: {active ? "Active" : "Retired"}</p>
    </div>
  );
}

