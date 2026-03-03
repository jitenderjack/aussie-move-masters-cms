"use client";

import { StoryblokServerComponent as StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

interface TestimonialsSectionProps {
  blok: {
    title: string;
    testimonials: Array<any>;
  };
}

export default function TestimonialsSection({ blok }: TestimonialsSectionProps) {
  return (
    <section {...storyblokEditable(blok)} className="py-16 lg:py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[hsl(38,92%,64%)]/10 text-[hsl(38,92%,64%)] text-xs font-bold px-3 py-1 rounded-full mb-3 font-['Montserrat']">
            REVIEWS
          </span>
          <h2 className="font-black text-3xl lg:text-4xl text-gray-900 font-['Montserrat'] mb-3">
            {blok.title}
          </h2>
          <div className="w-16 h-1 bg-[hsl(38,92%,64%)] mx-auto rounded-full mb-4" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blok.testimonials?.map((testimonial) => (
            <StoryblokComponent blok={testimonial} key={testimonial._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
