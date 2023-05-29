import Label from "./label";

interface RadioGroupProps {
  name: string;
  children: React.ReactNode;
}

export function RadioGroup({ name, children }: RadioGroupProps) {
  return (
    <fieldset className="flex flex-col gap-1">
      <Label text={name[0].toUpperCase() + name.slice(1)} />
      <div className="flex rounded-full overflow-hidden bg-gray-200 divide-x divide-gray-300">
        {children}
      </div>
    </fieldset>
  );
}

interface RadioProps {
  name: string;
  value: string;
  children: React.ReactNode;
}

export function Radio({ name, value, children }: RadioProps) {
  return (
    <label htmlFor={value} className="flex-auto">
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        className="peer sr-only"
      />
      <div className="p-2  peer-checked:bg-gray-300 transition-colors duration-300 text-center">
        {children}
      </div>
    </label>
  );
}
