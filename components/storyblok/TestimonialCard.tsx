"use client";

import { Star } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface TestimonialCardProps {
  blok: {
    name: string;
    location: string;
    review: string;
    rating: number;
  };
}

export default function TestimonialCard({ blok }: TestimonialCardProps) {
  const rating = blok.rating || 5;

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-[hsl(37,91%,55%)] fill-current" />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{blok.review}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-[hsl(174,65%,28%)] rounded-full flex items-center justify-center text-white font-black text-sm font-['Montserrat']">
          {blok.name[0]}
        </div>
        <div>
          <p className="font-bold text-sm font-['Montserrat']">{blok.name}</p>
          <p className="text-xs text-gray-600">{blok.location}</p>
        </div>
      </div>
    </div>
  );
}
