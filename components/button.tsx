import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  submit?: boolean;
}

export default function Button({
  children,
  onClick,
  href,
  submit,
}: ButtonProps) {
  const className =
    "flex flex-row justify-center items-center rounded-lg gap-5 bg-primary p-3 text-white";
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={className}
      onClick={onClick}
      type={submit ? "submit" : "button"}
    >
      {children}
    </button>
  );
}
