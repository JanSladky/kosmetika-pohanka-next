import React, { useState, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function AccordionSection({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-colors text-left"
      >
        <span className="font-medium text-gray-800">{title}</span>
        <span className="text-gray-500">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="px-4 py-2">{children}</div>}
    </div>
  );
}