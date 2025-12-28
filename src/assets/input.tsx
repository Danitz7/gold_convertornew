import { cn } from "../func/CN";
import type { ClassNameValue } from "tailwind-merge";
interface props {
  className?: ClassNameValue;
  children: string;
  inputtype: "number" | "multiple";
  setvalue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}
export default function INPUT({
  children,
  className,
  inputtype = "multiple",
  setvalue,
  value,
}: props) {
  return (
    <>
      {inputtype === "multiple" ? (
        <input
          type="text"
          className={cn(
            "bg-amber-200 border-2 outline-0 rounded-4xl text-6xl placeholder:font-light font-bold font-JetBrainsMono text-center shadow-xl transition-all duration-300",
            "focus:scale-105 focus:border-blue-500 focus:shadow-2xl",
            className
          )}
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          placeholder={children.toUpperCase()}
        />
      ) : (
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]"
          title="Numbers only"
          className={cn(
            "bg-amber-200 border-2 outline-0 rounded-4xl text-6xl placeholder:font-light font-bold font-JetBrainsMono text-center shadow-xl transition-all duration-300",
            "focus:scale-105 focus:border-blue-500 focus:shadow-2xl",
            className
          )}
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          placeholder={children.toUpperCase()}
        />
      )}
    </>
  );
}
