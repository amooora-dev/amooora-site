"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { cn } from "@/utils/cn";

const FaqItem = ({
  question,
  answer,
  item,
}: {
  question: string;
  answer: React.ReactNode;
  item: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "mb-4 border-b-[0.4px] p-4 border-[#932D6F] dark:border-[#dca0c8]"
      )}
    >
      <h2
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "text-[1.3rem] font-bold cursor-pointer flex items-center justify-between title"
        )}
      >
        <span className='max-w-[80%] block'>
          {item}. {question}
        </span>
        {isOpen ? (
          <ChevronUp className="text-[#932D6F] dark:text-[#dca0c8]" />
        ) : (
          <ChevronDown className="text-[#932D6F] dark:text-[#dca0c8]" />
        )}
      </h2>
      {isOpen ? (
        <p
          className={cn(
            "mt-2 text-slate-600 dark:text-slate-300"
          )}
        >
          {answer}
        </p>
      ) : null}
    </div>
  );
};

export default FaqItem;
