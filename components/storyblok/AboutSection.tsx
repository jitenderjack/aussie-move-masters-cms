"use client";

import { Shield, Award, Users, Zap } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface AboutSectionProps {
  blok: {
    title: string;
    subtitle: string;
    description_1: string;
    description_2: string;
    stats: Array<{
      number: string;
      label: string;
      _uid: string;
    }>;
    features: Array<{
      icon: string;
      title: string;
      description: string;
      _uid: string;
    }>;
  };
}

const iconMap: Record<string, any> = {
  shield: Shield,
  award: Award,
  users: Users,
  zap: Zap,
};

export default function AboutSection({ blok }: AboutSectionProps) {
  return (
    <section
      {...storyblokEditable(blok)}
      id="about"
      className="py-16 lg:py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[hsl(38,92%,64%)]/10 text-[hsl(38,92%,64%)] text-xs font-bold px-3 py-1 rounded-full mb-4 font-['Montserrat']">
              ABOUT US
            </span>
            <h2 className="font-black text-3xl lg:text-4xl font-['Montserrat'] mb-2 text-gray-900">
              {blok.title}
            </h2>
            <h3 className="text-xl text-[hsl(174,70%,28%)] font-bold font-['Montserrat'] mb-5">
              {blok.subtitle}
            </h3>
            <div className="w-16 h-1 bg-[hsl(38,92%,64%)] rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">{blok.description_1}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{blok.description_2}</p>
            <div className="grid grid-cols-2 gap-4">
              {blok.stats?.map((stat) => (
                <div
                  key={stat._uid}
                  className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center"
                >
                  <div className="text-3xl font-black text-[hsl(174,70%,28%)] font-['Montserrat']">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 font-semibold mt-1 font-['Montserrat']">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {blok.features?.map((feature) => {
              const IconComponent = iconMap[feature.icon] || Shield;
              return (
                <div
                  key={feature._uid}
                  className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-[hsl(174,70%,28%)]/30 transition-all"
                >
                  <div className="w-10 h-10 bg-[hsl(174,70%,28%)]/10 rounded-xl flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5 text-[hsl(174,70%,28%)]" />
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
