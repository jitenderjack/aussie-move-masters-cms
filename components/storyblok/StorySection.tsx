"use client";

import { MapPin, Award, Users, HeartHandshake, ArrowRight } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface StorySectionProps {
  blok: {
    title: string;
    subtitle: string;
    paragraph_1: string;
    paragraph_2: string;
    paragraph_3: string;
    cta_text: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
      _uid: string;
    }>;
  };
}

const iconMap: Record<string, any> = {
  mapPin: MapPin,
  award: Award,
  users: Users,
  heart: HeartHandshake,
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function StorySection({ blok }: StorySectionProps) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="py-16 lg:py-24 bg-gray-100"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[hsl(37,91%,55%)]/10 text-[hsl(37,91%,55%)] text-xs font-bold px-3 py-1 rounded-full mb-3 font-['Montserrat']">
            OUR STORY
          </span>
          <h2 className="font-black text-3xl lg:text-4xl text-gray-900 font-['Montserrat'] mb-3">
            {blok.title}
          </h2>
          <div className="w-16 h-1 bg-[hsl(37,91%,55%)] mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base">{blok.subtitle}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>{blok.paragraph_1}</p>
            <p>{blok.paragraph_2}</p>
            <p dangerouslySetInnerHTML={{ __html: blok.paragraph_3 }} />
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 bg-[hsl(174,65%,28%)] text-white font-black px-6 py-3 rounded-full hover:bg-[hsl(174,70%,18%)] transition-all font-['Montserrat'] text-sm mt-2"
            >
              {blok.cta_text} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {blok.features?.map((feature) => {
              const IconComponent = iconMap[feature.icon] || MapPin;
              return (
                <div
                  key={feature._uid}
                  className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm"
                >
                  <div className="w-10 h-10 bg-[hsl(37,91%,55%)]/10 rounded-xl flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5 text-[hsl(37,91%,55%)]" />
                  </div>
                  <h4 className="font-bold text-sm font-['Montserrat'] mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
