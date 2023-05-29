import { useState } from "react";
import Label from "./label";

interface TextFieldProps {
  label: string;
  id: string;
  placeholder?: string;
  pattern?: string;
  numeric?: boolean;
}

export default function TextField({
  label,
  id,
  placeholder,
  numeric,
}: TextFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <Label text={label} />
      <input
        type="text"
        className="block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 p-2"
        placeholder={placeholder}
        name={id}
        id={id}
        inputMode={numeric ? "numeric" : "text"}
      />
    </div>
  );
}
