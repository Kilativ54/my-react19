import { useState } from "react";
export default function Counter() {
    const [clicks, setClicks] = useState(0);
    const handleClickStateSame = () => {
        setClicks( clicks + 1);
    }
    return <button onClick={handleClickStateSame}>Click me: { clicks }</button>
}