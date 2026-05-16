export default function PilotProfile({ pilot: {  name, rank, age, active } }) {
  return (
    <div>
      <p>Name:{name}</p>
      <p>Rank: {rank}</p>
      <p>Age: {age}</p>
      <p>Status: {active ? "Active" : "Retired"}</p>
    </div>
  );
}
