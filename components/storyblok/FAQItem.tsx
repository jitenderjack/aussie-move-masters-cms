"use client";
import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQItem({ blok }: any) {
  const [open, setOpen] = useState(false);
  
  return (
    <div {...storyblokEditable(blok)} className="bg-white border rounded-2xl overflow-hidden shadow-sm">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-sm hover:text-[hsl(174,70%,28%)]">
        {blok.question}
        {open ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t pt-4">
          {blok.answer}
        </div>
      )}
    </div>
  );
}
