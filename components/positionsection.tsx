interface PositionProps {
  color: "r" | "b";
  number: "1" | "2" | "3";
}

export default function Position({ color, number }: PositionProps) {
  return (
    <label htmlFor={color + number}>
      <input
        type="radio"
        name="position"
        id={color + number}
        value={color + number}
        className="peer sr-only"
      />
      <div
        className={
          "w-10 aspect-square font-bold text-white rounded-lg text-2xl flex justify-center items-center cursor-pointer transition-all peer-checked:border-gray-300 peer-checked:border-2 peer-checked:scale-125 " +
          (color === "r"
            ? "bg-red-400 peer-checked:bg-red-600"
            : "bg-blue-400 peer-checked:bg-blue-600")
        }
      >
        {number}
      </div>
    </label>
  );
}
