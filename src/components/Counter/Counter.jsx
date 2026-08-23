import { useState } from "react";
export default function Counter({initialValue = 0, text = "Click me"}) {
    const [clicks, setClicks] = useState(initialValue);
    const handleClickStateSame = () => {
        setClicks( clicks + 1);
    }
    return <button onClick={handleClickStateSame}>{text}: { clicks }</button>
}