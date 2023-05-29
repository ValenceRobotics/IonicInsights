interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <h1 className="bg-primary w-full rounded-full text-white font-bold text-center uppercase text-2xl p-2">
      {title}
    </h1>
  );
}
