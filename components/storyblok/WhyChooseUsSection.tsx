"use client";

import { DollarSign, FileText, Truck, Clock, Shield, ThumbsUp, HeartHandshake, Award } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface WhyChooseUsSectionProps {
  blok: {
    title: string;
    subtitle: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
      _uid: string;
    }>;
  };
}

const iconMap: Record<string, any> = {
  dollar: DollarSign,
  fileText: FileText,
  truck: Truck,
  clock: Clock,
  shield: Shield,
  thumbsUp: ThumbsUp,
  heart: HeartHandshake,
  award: Award,
};

export default function WhyChooseUsSection({ blok }: WhyChooseUsSectionProps) {
  return (
    <section
      {...storyblokEditable(blok)}
      id="why-us"
      className="py-16 lg:py-24 bg-[hsl(174,65%,28%)] text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[hsl(37,91%,55%)]/20 text-[hsl(37,91%,55%)] text-xs font-bold px-3 py-1 rounded-full mb-3 font-['Montserrat']">
            WHY CHOOSE US
          </span>
          <h2 className="font-black text-3xl lg:text-4xl font-['Montserrat'] mb-3">
            {blok.title}
          </h2>
          <div className="w-16 h-1 bg-[hsl(37,91%,55%)] mx-auto rounded-full mb-4" />
          <p className="opacity-80 max-w-2xl mx-auto text-base">{blok.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blok.features?.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Shield;
            return (
              <div
                key={feature._uid}
                className="flex gap-3 bg-white/8 rounded-2xl p-5 border border-white/15 hover:bg-white/12 transition-colors"
              >
                <div className="w-10 h-10 bg-[hsl(37,91%,55%)]/20 rounded-xl flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5 text-[hsl(37,91%,55%)]" />
                </div>
                <div>
                  <h4 className="font-black text-sm font-['Montserrat'] mb-1">{feature.title}</h4>
                  <p className="text-xs opacity-75 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
