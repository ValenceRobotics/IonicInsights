import { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { IconType } from "react-icons";

interface CounterProps {
  height: "low" | "mid" | "high";
  measuring: string;
  icon: IconType;
  phase: "auto" | "teleop";
}

export default function Counter({
  height,
  measuring,
  icon,
  phase,
}: CounterProps) {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col text-2xl gap-1 items-center">
      {icon({ className: "text-gray-400" })}

      <FaPlusCircle
        onClick={() => setCount(count + 1)}
        className="cursor-pointer text-primary"
      />
      <input
        inputMode="numeric"
        name={height + measuring + phase}
        id={height + measuring + phase}
        className="rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 p-1 text-black text-base w-8 text-center"
        value={count}
      />
      <FaMinusCircle
        onClick={() => setCount(count - 1)}
        className="cursor-pointer text-primary"
      />
    </div>
  );
}
