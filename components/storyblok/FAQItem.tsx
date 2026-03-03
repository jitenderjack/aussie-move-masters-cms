"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface FAQItemProps {
  blok: {
    question: string;
    answer: string;
  };
}

export default function FAQItem({ blok }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-sm font-['Montserrat'] hover:text-[hsl(174,70%,28%)] transition-colors"
      >
        {blok.question}
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[hsl(174,70%,28%)] shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-600 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
          {blok.answer}
        </div>
      )}
    </div>
  );
}
