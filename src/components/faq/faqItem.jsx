import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { cn } from "../../utils/cn";
import { useTheme } from "../../utils/useTheme";

const FaqItem = ({ question, answer, item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <div
      className={cn(
        "mb-4 border-b-[0.4px] p-4",
        isLightTheme ? "border-[#932D6F]" : "border-[#dca0c8]"
      )}
    >
      <h2
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "text-[1.3rem] font-bold cursor-pointer flex items-center justify-between",
          isLightTheme ? "text-slate-700" : "text-slate-200"
        )}
      >
        <span className="max-w-[80%] block">
          {item}. {question}
        </span>
        {isOpen ? (
          <ChevronUp color={isLightTheme ? "#932D6F" : "#dca0c8"} />
        ) : (
          <ChevronDown color={isLightTheme ? "#932D6F" : "#dca0c8"} />
        )}
      </h2>
      {isOpen ? (
        <p
          className={cn(
            "mt-2",
            isLightTheme ? "text-slate-600" : "text-slate-300"
          )}
        >
          {answer}
        </p>
      ) : null}
    </div>
  );
};

export default FaqItem;
