import { IoCubeOutline } from "react-icons/io5";
import Counter from "./counter";
import Label from "./label";
import { BsCone } from "react-icons/bs";

interface CounterSectionProps {
  height: "low" | "mid" | "high";
  phase: "auto" | "teleop";
}

export default function CounterSection({ height, phase }: CounterSectionProps) {
  return (
    <div className="flex flex-col text-center gap-1">
      <Label text={height[0].toUpperCase() + height.slice(1)} />
      <div className="flex gap-2">
        <Counter
          height={height}
          measuring="cubes"
          icon={IoCubeOutline}
          phase={phase}
        />
        <Counter
          height={height}
          measuring="cones"
          icon={BsCone}
          phase={phase}
        />
      </div>
    </div>
  );
}
