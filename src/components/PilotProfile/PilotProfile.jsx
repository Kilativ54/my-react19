import clsx from "clsx"; 
import css from "./PilotProfile.module.css";

export default function PilotProfile({ pilot: { name, rank, age, active } }) {
 
  const statusClsx = clsx (css.text, active ? css.active : css.retired)
 
  return (
    <div>
      <p className={css.text}>Name:{name}</p>
      <p className={css.text}>Rank: {rank}</p>
      <p className={css.text}>Age: {age}</p>
      <p className={statusClsx}>Status: {active ? "Active" : "Retired"}</p>
    </div>
  );
}

