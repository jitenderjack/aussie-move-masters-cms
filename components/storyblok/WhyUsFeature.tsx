"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import { DollarSign, Shield, Truck, Clock } from "lucide-react";

const iconMap: Record<string, any> = { dollar: DollarSign, shield: Shield, truck: Truck, clock: Clock };

export default function WhyUsFeature({ blok }: any) {
  const Icon = iconMap[blok.icon] || Shield;
  return (
    <div {...storyblokEditable(blok)} className="flex gap-3 bg-white/8 rounded-2xl p-5 border border-white/15">
      <Icon className="w-5 h-5 text-[hsl(37,91%,55%)] shrink-0 mt-1" />
      <div>
        <h4 className="font-black text-sm mb-1">{blok.title}</h4>
        <p className="text-xs opacity-75">{blok.description}</p>
      </div>
    </div>
  );
}
