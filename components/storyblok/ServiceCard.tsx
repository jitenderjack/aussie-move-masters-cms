"use client";

import { Home, Building2, Package, Truck, Zap, Users, ArrowRight } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface ServiceCardProps {
  blok: {
    icon: string;
    title: string;
    description: string;
    tag?: string;
  };
}

const iconMap: Record<string, any> = {
  home: Home,
  building: Building2,
  package: Package,
  truck: Truck,
  zap: Zap,
  users: Users,
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function ServiceCard({ blok }: ServiceCardProps) {
  const IconComponent = iconMap[blok.icon] || Home;

  return (
    <div
      {...storyblokEditable(blok)}
      className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[hsl(174,65%,28%)]/30 hover:-translate-y-1 transition-all"
    >
      {blok.tag && (
        <span className="inline-block bg-[hsl(37,91%,55%)]/10 text-[hsl(37,91%,55%)] text-[10px] font-black px-2 py-0.5 rounded-full mb-3 font-['Montserrat']">
          {blok.tag}
        </span>
      )}
      <div className="w-12 h-12 bg-[hsl(174,65%,28%)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[hsl(174,65%,28%)]/20 transition-colors">
        <IconComponent className="w-6 h-6 text-[hsl(174,65%,28%)]" />
      </div>
      <h3 className="font-black text-base font-['Montserrat'] mb-2">{blok.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{blok.description}</p>
      <button
        onClick={() => scrollTo("contact")}
        className="flex items-center gap-1 text-[hsl(174,65%,28%)] font-bold text-xs font-['Montserrat'] hover:gap-2 transition-all"
      >
        Get a Quote <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
