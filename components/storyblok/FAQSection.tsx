"use client";

import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

interface FAQSectionProps {
  blok: {
    title: string;
    items: Array<any>;
  };
}

export default function FAQSection({ blok }: FAQSectionProps) {
  return (
    <section {...storyblokEditable(blok)} id="faq" className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[hsl(38,92%,64%)]/10 text-[hsl(38,92%,64%)] text-xs font-bold px-3 py-1 rounded-full mb-3 font-['Montserrat']">
            FAQ
          </span>
          <h2 className="font-black text-3xl lg:text-4xl text-gray-900 font-['Montserrat'] mb-3">
            {blok.title}
          </h2>
          <div className="w-16 h-1 bg-[hsl(38,92%,64%)] mx-auto rounded-full mb-4" />
        </div>
        <div className="space-y-3">
          {blok.items?.map((item) => (
            <StoryblokComponent blok={item} key={item._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
