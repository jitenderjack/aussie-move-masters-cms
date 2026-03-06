"use client";

import { storyblokEditable } from "@storyblok/react/rsc";

interface HowItWorksSectionProps {
  blok: {
    title: string;
    subtitle?: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      _uid: string;
    }>;
  };
}

export default function HowItWorksSection({ blok }: HowItWorksSectionProps) {
  return (
    <section {...storyblokEditable(blok)} className="py-16 lg:py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[hsl(37,91%,55%)]/10 text-[hsl(37,91%,55%)] text-xs font-bold px-3 py-1 rounded-full mb-3 font-['Montserrat']">
            OUR PROCESS
          </span>
          <h2 className="font-black text-3xl lg:text-4xl text-gray-900 font-['Montserrat'] mb-3">
            {blok.title}
          </h2>
          <div className="w-16 h-1 bg-[hsl(37,91%,55%)] mx-auto rounded-full mb-4" />
          {blok.subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto text-base">{blok.subtitle}</p>
          )}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blok.steps?.map((step) => (
            <div
              key={step._uid}
              className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-[hsl(174,65%,28%)] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black font-['Montserrat'] text-sm">
                {step.number}
              </div>
              <h4 className="font-black font-['Montserrat'] mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
