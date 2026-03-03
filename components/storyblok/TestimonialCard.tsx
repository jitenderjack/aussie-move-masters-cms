"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Star } from "lucide-react";

export default function TestimonialCard({ blok }: any) {
  return (
    <div {...storyblokEditable(blok)} className="bg-white rounded-2xl p-6 border shadow-sm">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[hsl(38,92%,64%)] fill-current" />)}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{blok.review}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-[hsl(174,70%,28%)] rounded-full flex items-center justify-center text-white font-black text-sm">
          {blok.name[0]}
        </div>
        <div>
          <p className="font-bold text-sm">{blok.name}</p>
          <p className="text-xs text-gray-600">{blok.location}</p>
        </div>
      </div>
    </div>
  );
}
