"use client";

import { StoryblokServerComponent as StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

interface ServicesSectionProps {
  blok: {
    title: string;
    subtitle: string;
    services: Array<any>;
  };
}

export default function ServicesSection({ blok }: ServicesSectionProps) {
  return (
    <section {...storyblokEditable(blok)} id="services" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[hsl(37,91%,55%)]/10 text-[hsl(37,91%,55%)] text-xs font-bold px-3 py-1 rounded-full mb-3 font-['Montserrat']">
            OUR SERVICES
          </span>
          <h2 className="font-black text-3xl lg:text-4xl text-gray-900 font-['Montserrat'] mb-3">
            {blok.title}
          </h2>
          <div className="w-16 h-1 bg-[hsl(37,91%,55%)] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base">{blok.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blok.services?.map((service) => (
            <StoryblokComponent blok={service} key={service._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
