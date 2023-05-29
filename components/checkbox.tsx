interface CheckboxProps {
  name: string;
  id: string;
}

export default function Checkbox({ name, id }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      className="bg-red-500 rounded-md border-transparent focus:ring-0 p-1 text-base w-full h-8 text-center text-green-500 transition-all duration-300"
    />
  );
}
