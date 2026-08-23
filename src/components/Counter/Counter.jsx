import { useState } from "react";

// diferent state for different buttons

// export default function Counter({ initialValue = 0, text = "Click me" }) {
//     const [clicks, setClicks] = useState(initialValue);
//     const handleClickStateSame = () => {
//         setClicks( clicks + 1);
//     }
//     return <button onClick={handleClickStateSame}>{text}: { clicks }</button>
// }

// one state for different buttons

export default function Counter({ value, onChange, text = "Click me" }) {
  return (
    <button onClick={onChange}>
      {text}: {value}
    </button>
  );
}