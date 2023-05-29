interface LabelProps {
  text: string;
}

export default function Label({ text }: LabelProps) {
  return <p className="text-xs font-light">{text}</p>;
}
