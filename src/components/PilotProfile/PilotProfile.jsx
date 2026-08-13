import clsx from "clsx"; 
import pilotAvataer from "../../assets/lion.jpg";
import css from "./PilotProfile.module.css";


export default function PilotProfile({ pilot: { name, rank, age, active } }) {
 
  const statusClsx = clsx (css.text, active ? css.active : css.retired)
 console.log(statusClsx);
  return (
    <div>
      <img src={pilotAvataer} alt="photo" />
      <p className={css.text}>Name:{name}</p>
      <p className={css.text}>Rank: {rank}</p>
      <p className={css.text}>Age: {age}</p>
      <p className={statusClsx}>Status: {active ? "Active" : "Retired"}</p>
    </div>
  );
}

