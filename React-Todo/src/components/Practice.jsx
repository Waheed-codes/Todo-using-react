import { useState,useEffect } from "react";

export default function Practice() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted!");
    })

    return (
        <button className="bg-red-50" onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}