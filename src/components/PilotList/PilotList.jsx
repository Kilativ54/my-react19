import PilotProfile from "../PilotProfile/PilotProfile";
import css from "./PilotList.module.css";

export default function PilotList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((officer) => (
        <li key={officer.key} className={css.item}>
          <PilotProfile pilot={officer} />
          <hr />
        </li>
      ))}
    </ul>
  );
}
