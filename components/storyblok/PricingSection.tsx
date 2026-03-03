"use client";

import { StoryblokServerComponent as StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

interface PricingSectionProps {
  blok: {
    title: string;
    subtitle: string;
    packages: Array<any>;
    footer_note?: string;
  };
}

export default function PricingSection({ blok }: PricingSectionProps) {
  return (
    <section {...storyblokEditable(blok)} id="pricing" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[hsl(38,92%,64%)]/10 text-[hsl(38,92%,64%)] text-xs font-bold px-3 py-1 rounded-full mb-3 font-['Montserrat']">
            PRICING
          </span>
          <h2 className="font-black text-3xl lg:text-4xl text-gray-900 font-['Montserrat'] mb-3">
            {blok.title}
          </h2>
          <div className="w-16 h-1 bg-[hsl(38,92%,64%)] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base">{blok.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blok.packages?.map((pkg) => (
            <StoryblokComponent blok={pkg} key={pkg._uid} />
          ))}
        </div>
        {blok.footer_note && (
          <p className="text-center text-gray-600 text-sm mt-8" dangerouslySetInnerHTML={{ __html: blok.footer_note }} />
        )}
      </div>
    </section>
  );
}
